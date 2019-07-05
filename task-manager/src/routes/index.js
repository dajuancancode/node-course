const { Router } = require('express')

const users = require('../controllers/users')
const tasks = require('../controllers/tasks')

const authMiddleware = require('../middleware/auth')

const router = Router()

router.get('/users/me', authMiddleware, users.userProfile)
router.post('/users/signup', users.createUser)
router.post('/users/login', users.loginUser)

router.get('/user/:id', authMiddleware, users.readUser)
router.patch('/user/:id', authMiddleware, users.updateUser)
router.delete('/user/:id', authMiddleware, users.removeUser)


router.get('/tasks', authMiddleware, tasks.listTasks)
router.post('/tasks/create', authMiddleware, tasks.createTask)

router.get('/task/:id', authMiddleware, tasks.readTask)
router.patch('/task/:id', authMiddleware, tasks.updateTask)
router.delete('/task/:id', authMiddleware, tasks.removeTask)

module.exports = router