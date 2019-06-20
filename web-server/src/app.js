const path = require('path')
const express = require('express')

const app = express()
const pathName = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(pathName))

app.get('', (req, res) => {
  res.render('index', {title: 'Weather App'})
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About Me'})
})

app.get('/help', (req, res) => {
  res.render('help', {title: 'Help', message: 'If you need help call ghostbusters.'})
})

app.get('/weather', (req, res) => {
  res.send({temp: 83.5, location: 'Miami, Fl'})
})

app.listen(3000, () => {
  console.log('Server is ready')
})