const request = require('request')

const weatherUrl = 'https://api.darksky.net/forecast/731f33b07bffe377173e6502a6d316ff/37.8267,-122.4233'
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFqdWFuY2FuY29kZSIsImEiOiJjangzNmZzbWcwNjVmM3pyMncwdXcwcmtiIn0.lko_Pg7q_j3LDQ7_LuWwcg"

request({url: mapboxUrl, json: true}, (err, res) => {
  if(!err) {
    const latitude  = res.body.features[0].center[0]
    const longitude = res.body.features[0].center[1]
    console.log(longitude, latitude)
  }else {
    console.log('Unable to connect to map service!')
  }
})

// request({ url: weatherUrl, json: true}, (err, res) => {
//   const data = res.body.currently

//   console.log(`It is currently ${data.temperature} degrees outside. There is a ${data.precipProbability}% chance of rain`)
// })