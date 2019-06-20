const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/731f33b07bffe377173e6502a6d316ff/${latitude},${longitude}`

  request({url, json: true}, (err, {body} = {}) => {
    if(err){
      callback('Unable to connect to weather service!', undefined)
    }else if(body.error){
      callback('Unable to find location!', undefined)
    }else {
      callback(undefined, `${body.daily.summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain`)
    }
  })
}

module.exports = forecast