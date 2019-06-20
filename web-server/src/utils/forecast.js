const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/731f33b07bffe377173e6502a6d316ff/${latitude},${longitude}`

  request({url, json: true}, (err, {body} = {}) => {
    if(err){
      callback('Unable to connect to weather service!', undefined)
    }else if(body.error){
      callback('Unable to find location!', undefined)
    }else {
      callback(undefined, `${body.daily.summary} Right now it's ${body.currently.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow} There is a ${body.currently.precipProbability}% chance of rain`)
    }
  })
}

module.exports = forecast