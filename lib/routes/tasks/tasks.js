import express from 'express';
import { getTasks } from "../../handlers/tasks.handler.js";

const tasksRouter = express.Router();


// Get
tasksRouter.get("/tasks", async (req, res) => {

    const data = await getTasks();

    if(data.status === 'ok') {

        return res.status(200).send({ message: data.message, data: data.data });

    } else {

        return res.status(200).send({ message: data.message, data: [] });

    }

});

export default tasksRouter;