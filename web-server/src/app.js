const path     = require('path')
const express  = require('express')
const hbs      = require('hbs')
const forecast = require('./utils/forecast')
const geocode  = require('./utils/geocode')

const app = express()

const pathName     = path.join(__dirname, '../public')
const viewPath     = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathName))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'DaJuan Harris'})
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'DaJuan Harris'})
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'If you need help call ghostbusters.',
    name: 'DaJuan Harris'})
})

app.get('/weather', (req, res) => {
  if(!req.query.address){
    return res.send({
      error: 'No address provided'
    })
  }

  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if(error) {
      return res.send({error})
    }

    forecast(latitude, longitude, (error, forecast) => {
      if(error) {
        return res.send({error})
      }

      res.send({
        forecast,
        location,
        address: req.query.address
      })
    })
  })

  
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({error: 'You must provide a search term'})
  }

  console.log(req.query.search)
    res.send({
      products: []
    })

  
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    helpText: 'Help article not found',
    name: 'DaJuan Harris'})
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    helpText: 'Page not found.',
    name: 'DaJuan Harris'})
})

app.listen(3000, () => {
  console.log('Server is ready')
})