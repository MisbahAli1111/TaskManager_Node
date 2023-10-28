const express = require('express')
const router = express.Router()

const {getAlltasks,deleteTask,updateTask,createTask,getSingletasks} = require('../controllers/task')

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getSingletasks).patch(updateTask).delete(deleteTask)

module.exports = router