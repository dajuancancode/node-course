require('../src/db/mongoose')
const Task = require('../src/models/task')

const _id = '5d1e0225a1d787e72429ea55'

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})

  return count
}

deleteTaskAndCount()
  .then(count => console.log(count))
  .catch(error => console.log(error))