const { Router } = require('express')

const users = require('../controllers/users')
const tasks = require('../controllers/tasks')

const router = Router()

router.get('/users', users.listUsers)

router.post('/signup', users.createUser)

router.get('/user/:id', users.readUser)
router.patch('/user/:id', users.updateUser)
router.delete('/user/:id', users.removeUser)


router.get('/tasks', tasks.listTasks)

router.post('/task', tasks.createTask)
router.get('/task/:id', tasks.readTask)
router.patch('/task/:id', tasks.updateTask)
router.delete('/task/:id', tasks.removeTask)

module.exports = router