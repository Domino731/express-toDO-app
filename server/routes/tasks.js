const {Router} = require('express');
const taskController = require('../controlers/tasksControler');

// router
const router = Router();

// handling routes
router.post('/new-task', taskController.newTask);

module.exports = router;