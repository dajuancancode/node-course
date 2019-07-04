const { Router } = require('express')

const user = require('../controllers/user')
const users = require('../controllers/users')
const task = require('../controllers/task')
const tasks = require('../controllers/tasks')

const router = Router()

router.post('/users', users.create)
router.get('/users', users.read)

router.get('/user/:id', user.read)
router.patch('/user/:id', user.update)
router.delete('/user/:id', user.remove)

router.post('/tasks', tasks.create)
router.get('/tasks', tasks.read)

router.get('/task/:id', task.read)
router.patch('/task/:id', task.update)
router.delete('/task/:id', task.remove)

module.exports = router