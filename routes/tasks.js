///////// TASK CONTROLLER /////////////////

//set up routing with Express
var express = require('express');
var router = express.Router();
    
//Reference Task Model
const Task = require('../models/task')

/* GET Hospital Info page. */
router.get('/', function (req, res, next) {
    //use the task model to fetch a list of tasks and pass these to the view display
    //if an error occurs, the error parameter will be filled
    //if not, the task parameter will be filled with the query result
    Task.find((err, tasks) => {
        if (err)
        {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('tasks/index',
                {
                    tasks: tasks
                })
        }
    })
})

//GET tasks add view
router.get('/add', (req, res, next) => {
    res.render('tasks/add')
})

//POST tasks/add for submission
router.post('/add', (req, res, next) => {
    Task.create({
        name: req.body.name,
        specialties: req.body.specialties,
        gender: req.body.gender,
        priority: req.body.priority
    }, (err, task) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/tasks')
        }
    })
})

//exposes this file as Public
module.exports = router;