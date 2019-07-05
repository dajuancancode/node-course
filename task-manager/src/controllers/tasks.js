const Task = require('../models/task')

const createTask = async(req, res) => {
  const task = new Task({
    ...req.body,
    author: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch(e) {
    res.status(400).send()
  }
}

const listTasks = async(req, res) => {
  try {
    const tasks = await Task.find({author: req.user._id})
    res.send(tasks)
  }catch (e) {
    res.status(500).send()
  }
}

const readTask = async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findOne({_id, author: req.user._id})
    !task ? res.status(404).send() : res.send(task)
  } catch(e) {
    res.status(500).send()
  }
}

const updateTask = async (req, res) => {
  const _id = req.params.id

  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))

  if (!isValidUpdate) {
    res.status(400).send()
    return
  }

  try {
    const task = await Task.findOne({_id, author: req.user._id})
    
    if (!task) {
      res.status(404).send()
      return
    }

    updates.forEach(update => task[update] = req.body[update])
    task.save()

    res.send(task)
  } catch(e) {
    res.status(400).send()
  }
}

const removeTask = async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findOneAndDelete({_id, author: req.user._id})
    !task ? res.status(404).send() : res.send(task)
  } catch(e) {
    res.status(400).send()
  }
}

module.exports = {createTask, listTasks, readTask, updateTask, removeTask}