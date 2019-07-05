const { Router } = require('express')

const users = require('../controllers/users')
const tasks = require('../controllers/tasks')

const authMiddleware = require('../middleware/auth')

const router = Router()


router.post('/users/signup', users.createUser)
router.post('/users/login', users.loginUser)
router.post('/users/logout', authMiddleware, users.logoutUser)
router.post('/users/logoutAll', authMiddleware, users.logoutAll)

router.get('/users/me', authMiddleware, users.userProfile)
router.patch('/users/me', authMiddleware, users.updateUser)
router.delete('/users/me', authMiddleware, users.removeUser)

router.get('/tasks', authMiddleware, tasks.listTasks)
router.post('/tasks/create', authMiddleware, tasks.createTask)

router.get('/task/:id', authMiddleware, tasks.readTask)
router.patch('/task/:id', authMiddleware, tasks.updateTask)
router.delete('/task/:id', authMiddleware, tasks.removeTask)

module.exports = router