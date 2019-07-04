require('../src/db/mongoose')
const User = require('../src/models/user')

const _id =  '5d1e26bf1863cce4ecdb0a69'

// User
//   .findByIdAndUpdate(_id, {age: 30})
//   .then(user => User.countDocuments({age: 30}))
//   .then(count => console.log(count))
//   .catch(e => console.log(e))

const updateAgeAndCount = async (id, age) => {
  const user = await User.findOneAndUpdate(id, {age})
  const count = await User.countDocuments({age})

  return count
}

updateAgeAndCount(_id, 29)
  .then(result => console.log(result))
  .catch(error => console.log(error))