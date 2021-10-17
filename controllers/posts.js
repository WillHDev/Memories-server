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

export const createTasks = (req, res) => {
    const body = req.body;
    const newtask = Task.New(body);
    try {

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    res.send('Create Task Works')
};
