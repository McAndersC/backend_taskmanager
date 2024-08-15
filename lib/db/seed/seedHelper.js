import userModel from "../models/user.model.mjs";
import taskModel from "../models/task.model.mjs";

/*

    Create new User

*/
export const seedUser = async (user) => {

    try {
        
        let newUser = await userModel.create(user);

        console.log('User created:', newUser)

        return newUser

    } catch (error) {

        throw(error)

    }

}

export const seedTask = async (task) => {

    try {
        
        let newTask = await taskModel.create(task);

        console.log('Task created:', newTask)

        return newTask

    } catch (error) {

        throw(error)

    }

}