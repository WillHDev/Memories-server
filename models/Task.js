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

var PostMessage = mongoose.model('Task', taskSchema);
export default PostMessage;