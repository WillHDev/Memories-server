import express from 'express';
import { getTasks, createTask } from '../controllers/posts.js';
//import Task from '../models/Task.js'

const router = express.Router()

//callback fn that will be executed once someone accesses this
//endpoint
router.get('/', getTasks);
router.post('/', createTask);

export default router;