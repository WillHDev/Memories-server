import express from 'express';

const router = express.Router()

//callback fn that will be executed once someone accesses this
//endpoint
router.get('/', (req, res) => {
    res.send('THIS WORKS')
});


export default router;