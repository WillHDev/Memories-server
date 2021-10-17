import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    assignedTo: [String],
    tags: [String],
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Task = mongoose.model('PostTask', taskSchema);
export default Task;