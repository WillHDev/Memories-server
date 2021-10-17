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

var Task = mongoose.model('Task', taskSchema);
export default Task;