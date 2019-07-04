const Task = require('../models/task')

const create = async(req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch(e) {
    res.status(400).send()
  }
}

const read = async(req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  }catch (e) {
    res.status(500).send()
  }
}

module.exports = {create, read}