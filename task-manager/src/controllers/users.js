const User = require('../models/user')


const createUser = async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch (e) {
    res.status(400).send(e)
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token})
  } catch (e) {
    console.log(e)
    res.status(400).send()
  }
}

const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
}

const logoutAll = async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
}

const userProfile = async (req, res) => {
  res.send(req.user)
  
}


const updateUser = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))
  
  
  if (!isValidUpdate) {
    res.status(400).send()
    return
  }

  try {
    
    updates.forEach(update => req.user[update] = req.body[update])
    req.user.updatedAt = new Date()
    req.user.save()

    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
}

const removeUser = async (req, res) => {
  
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(400).send()
  }
}

module.exports =  { createUser, loginUser, logoutUser, logoutAll, userProfile, updateUser, removeUser }