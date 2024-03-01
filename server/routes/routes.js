const express = require('express');
const router = express.Router();
const Task = require('../models/models'); // Assuming your Task model is imported correctly

router.get('/', async (req, res) => {
    try {
        const task = new Task({
            todo: 'Make Lunch',
            isComplete: false
        });

        const doc = await task.save();
        console.log(doc);
        res.send('Task saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    }
});



module.exports = router;







/* const express = require('express');
const Task = require('../models/models')
const router = express.Router()

router.get('/', (req, res) => {
    const task = new Task({
        todo : 'Make Lunch',
        isComplete : false
    })
    
    /* task.save((err,doc) => {
        if(err) console.log(err)
        console.log(doc)
    }) */
/* })

module.exports = router  */