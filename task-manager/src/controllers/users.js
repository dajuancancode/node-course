const User = require('../models/user')

const createUser = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
}

const listUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch(e) {
    res.status(500).send()
  }
  
}

const readUser = async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)
    !user ? res.status(404).send() : res.send(user)
  }catch(error) {
    res.status(500).send()
  }
}

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))
  
  const _id = req.params.id

  if (!isValidUpdate) {
    res.status(400).send()
    return
  }

  try {
    const user = await User.findById(_id)
    updates.forEach(update => user[update] = req.body[update])
    user.save()

    !user ? res.status(404).send() : res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
}

const removeUser = async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findByIdAndDelete(_id)
    !user ? res.status(404).send() : res.send(user)
  } catch (e) {
    res.status(400).send()
  }
}

module.exports =  { createUser, listUsers, readUser, updateUser, removeUser }