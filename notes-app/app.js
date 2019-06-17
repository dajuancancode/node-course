const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')

const validEmail = validator.isEmail('dajuancancode@gmail.com') ? 'Valid Email' : 'Invalid Email'
const inValidEmail = validator.isEmail('@gmail.com') ? 'Valid Email' : 'Invalid Email'

const validEmailStyle = chalk.green.inverse.bold
const inValidEmailStyle = chalk.red.inverse.bold

console.log(notes.getNotes())

console.log(validEmailStyle(validEmail))
console.log(inValidEmailStyle(inValidEmail))
