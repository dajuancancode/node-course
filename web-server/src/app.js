const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const pathName     = path.join(__dirname, '../public')
const viewPath     = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathName))

app.get('', (req, res) => {
  res.render('index', {title: 'Weather', name: 'DaJuan Harris'})
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About Me', name: 'DaJuan Harris'})
})

app.get('/help', (req, res) => {
  res.render('help', {title: 'Help', message: 'If you need help call ghostbusters.', name: 'DaJuan Harris'})
})

app.get('/weather', (req, res) => {
  res.send({temp: 83.5, location: 'Miami, Fl'})
})

app.get('/help/*', (req, res) => {
  res.render('404', {title: '404', helpText: 'Help article not found', name: 'DaJuan Harris'})
})

app.get('*', (req, res) => {
  res.render('404', {title: '404', helpText: 'Page not found.', name: 'DaJuan Harris'})
})

app.listen(3000, () => {
  console.log('Server is ready')
})