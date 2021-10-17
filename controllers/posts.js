 import PostMessage from '../models/Task.js';

export const getTasks = async (req, res) => {
    //bc it takes time so we use await
    try { 
        const tasks = await PostMessage.find();
   // console.log(tasks);
    //res.send('THIS WORKS')
    res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTasks = (req, res) => {

    res.send('Create Task Works')
};
