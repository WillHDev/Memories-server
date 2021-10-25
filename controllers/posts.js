 import mongoose from 'mongoose';
import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
    //bc it takes time so we use await
    try { 
        const tasks = await Task.find();
   // console.log(tasks);
    //res.send('THIS WORKS')
    res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    const { title, description, assignedTo, tags, creator } = req.body;

    const newTask = new Task({ title, description, assignedTo, tags, creator })

    try {
        await newTask.save();

        res.status(201).json( newTask );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    // const body = req.body;
    // const newTask = Task.New(body);
    // try {
    //     //this is the asynchonous action
    //     await newTask.save();
    //     res.status(201).json(newTask);
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }
    // res.send('Create Task Works')
};

export const updateTask = async (req, res) => {
const { id: _id } = req.params
const task = req.body;

if (!mongoose.types.ObjectId.isValid(_id)) {
    return res.status(404).send('No task with that id')
}


 const updatedTask = await Task.findByIdAndUpdate(_id, task, { new: true } )
 res.json(updateTask)
}
