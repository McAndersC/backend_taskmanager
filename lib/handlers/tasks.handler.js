
import dbConnect from '../db/dbConnect.js';
import taskModel from '../db/models/task.model.mjs';

export const getTasks = async () => {
    // Database Connection
    await dbConnect();

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        let data = await taskModel.find({});
        result = {status: 'ok', message: "Tasks fetched successfully", data: data}

    } catch (error) {   

        console.log(error)
       
    }

    return result
}

export const createTask = async (task) => {
  
    let result = {status: 'error', message: "An Error Occurred", data: []};

    await dbConnect();

    try {
        let data = await taskModel.create(task);
        result = {status: 'ok', message: "Task created successfully", data: data}

    } catch (error) {   

        console.log(error)
    }

    return result

}

export const updateTask = async (task) => {
    let result = {status: 'error', message: "An Error Occurred", data: []};

    await dbConnect();

    try {
        let data = await taskModel.findByIdAndUpdate(task.id, task, {new: true});
        result = {status: 'ok', message: "Task updated successfully", data: data}

    } catch (error) {   

        console.log(error)
    }

    return result
}

export const deleteTask = async (id) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    await dbConnect();

    try {
        let data = await taskModel.findByIdAndDelete(id);
        result = {status: 'ok', message: "Task deleted successfully", data: data}

    } catch (error) {   

        console.log(error)
    }
    
    return result
}