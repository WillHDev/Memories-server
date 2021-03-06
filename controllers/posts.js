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
