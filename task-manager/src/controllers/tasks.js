const Task = require('../models/task')

const createTask = async(req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch(e) {
    res.status(400).send()
  }
}

const listTasks = async(req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  }catch (e) {
    res.status(500).send()
  }
}

const readTask = async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findById(_id)
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

  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true})
    return !task || !isValidUpdate ? res.status(404).send() : res.send(task)
  } catch(e) {
    res.status(400).send()
  }
}

const removeTask = async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findByIdAndDelete(_id)
    return !task ? res.status(404).send() : res.send(task)
  } catch(e) {
    res.status(400).send()
  }
}

module.exports = {createTask, listTasks, readTask, updateTask, removeTask}