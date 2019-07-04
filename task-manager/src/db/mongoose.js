const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age can not be negative")
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {throw new Error('Must enter a valid email')}
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowercase().includes("password")) {
        throw new Error("Password can not contain 'password'")
      }
    }
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

// const me = new User({name: 'DaJuan', age: 29, email: 'DaJuanCanCode@GMAIL.COM', password: ' Corrupted@18   '})

// me
//   .save()
//   .then(() => console.log(me))
//   .catch(error => console.log('Error! ', error))

const task = new Task({description: 'Clean Table and monitor'})

task
  .save()
  .then(() => console.log(task))
  .catch(error => console.log('Error! ', error))