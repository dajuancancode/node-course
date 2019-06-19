const request = require('request')

const geocode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1IjoiZGFqdWFuY2FuY29kZSIsImEiOiJjangzNmZzbWcwNjVmM3pyMncwdXcwcmtiIn0.lko_Pg7q_j3LDQ7_LuWwcg`

  request({url, json: true}, (err, {body}) => {
    if(err) {
      callback('Unable to connect to location services', undefined)
    }else if(body.message) {
      callback('Unable to find location!', undefined)
    }else {
      const latitude  = body.features[0].center[1]
      const longitude = body.features[0].center[0]
      const location  = body.features[0]['place_name']
      callback(undefined, {latitude,longitude,location})
    }
  })
}

module.exports = geocode