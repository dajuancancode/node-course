const User = require ('../models/user')

const read = async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)
    !user ? res.status(404).send() : res.send(user)
  }catch(error) {
    res.status(500).send()
  }
}

const update = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update))
  
  const _id = req.params.id

  try {
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true})
    return !user || !isValidUpdate ? res.status(404).send() : res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
}

const remove = async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findByIdAndDelete(_id)
    return !user ? res.status(404).send() : res.send(user)
  } catch (e) {
    res.status(400).send()
  }
}

module.exports = { read, update, remove}