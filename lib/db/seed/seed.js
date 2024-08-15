import { exit } from 'process';
import bcrypt from 'bcryptjs';
import dbConnect from '../dbConnect.js';
import { seedTask, seedUser } from './seedHelper.js';


/*

    This is our default setup for a seeding file - it is low key and primitive until we have found
    the struture for our projects.

*/

console.log('----------------------')
console.log('Media College Viborg')
console.log('Seeding files')
console.log('----------------------\n')

// Database Connection
await dbConnect();

const admin = await seedUser({
    "name" : "Taskmaster",
    "email" : "taskmaster@mcdm.dk",
    "role" : "admin",
    "hashedPassword" : await bcrypt.hash("taskmaster", 10)
})

const user1 = await seedUser({
    "name" : "Jens",
    "email" : "jens@mcdm.dk",
    "role" : "user",
    "hashedPassword" : await bcrypt.hash("jens", 10)
})

const user2 = await seedUser({
    "name" : "Hanne",
    "email" : "hanne@mcdm.dk",
    "role" : "user",
    "hashedPassword" : await bcrypt.hash("hanne", 10)
})


const task = await seedTask({
    "title":"Opgave 1",
    "description":"Opret nye opgaver og tildele dem til Jens og Hanne",
    "status":"progress",
    "deadline":"2022-05-04",
    "assignee": admin._id
})



console.log('\n----------------------');
console.log('Seeding files completed');
console.log('----------------------');

exit();