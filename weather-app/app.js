const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Tamarac, Florida', (err, res) => {
  if(res) {
    forecast(res.latitude, res.longitude, (err, res) => {
      console.log(`Error: ${err}`)
      console.log(`Data: ${res.temperature}`)
    })
  }
})