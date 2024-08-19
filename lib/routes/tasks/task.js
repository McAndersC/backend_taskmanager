import express from 'express';
import { createTask, deleteTask, getTasks, updateTask } from "../../handlers/tasks.handler.js";
import auth from '../../middleware/auth.middleware.js';
import multer from 'multer';
import * as mime from 'mime-types';
const taskRouter = express.Router();
// Multer Setup for storage.
const employeeStorage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'public/employees')
    },
    filename: function (req, file, cb) {
        console.log('FILE', file, req.body)
        
        let newFileName = getNewUID() + '.' + mime.extension(file.mimetype)
        let ext = mime.extension(file.mimetype)
        console.log('Ext', ext, newFileName)
        cb(null, newFileName);
    }
});

const upload = multer({ storage: employeeStorage });
//Post / Create
taskRouter.post('/task', auth, upload.single('file'), async (req, res) => {
    
    const {title, status, description, deadline, assignee} = req.body;

    console.log('assignee', assignee)

    const newTask = {
        title: title,
        description: description,
        status: status,
        deadline: deadline,
        assignee : assignee
    }

    const result = await createTask(newTask);
    
    if(result.status === 'ok') {

        return res.status(200).send(
            { message: result.message, 
                data: result.data 
            }
        );

    } else {

        return res.status(200).send(
            { 
                message: result.message, 
                data: [] 
            }
        );

    }
    
});

// PUT
taskRouter.put('/task', auth, upload.single('file'), async (req, res) => {

    const updatedTask = {
        ...req.body
    }

    let result = await updateTask(updatedTask);

    if(result.status === 'ok') {

        return res.status(200).send({ message: result.message, data: result.data })

    } else {

        return res.status(200).send({ message: result.message, data: {} })

    }

});

// DELETE
taskRouter.delete('/task', auth, async (req, res) => {

    if(!req.query.id) {
        return res.status(200).send({ message: 'No ID provided', data: {}})
    }
    
    let result = await deleteTask(req.query.id);

    if(result.status === 'ok') {

        return res.status(200).send({ message: result.message, data: [] })

    } else {

        return res.status(200).send({ message: result.message, data: {} })

    }

})


export default taskRouter;
