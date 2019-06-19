const request = require('request')

const forecast = (lattidude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/731f33b07bffe377173e6502a6d316ff/${lattidude},${longitude}`

  request({url: url, json: true}, (err, res) => {
    if(err){
      callback('Unable to connect to weather service!', undefined)
    }else if(res.body.error){
      callback('Unable to find location!', undefined)
    }else {
      callback(undefined, {
        summary: res.body.daily.summary,
        temperature: res.body.currently.temperature,
        rainChance: res.body.currently.percipProbability
      })
    }
  })
}

module.exports = forecast