const https = require('https')

const url= `https://api.darksky.net/forecast/731f33b07bffe377173e6502a6d316ff/40,75`

const request = https.request(url, (response) => {

  let data = ''

  response.on('data', (chunk) => {
    data += chunk.toString()
  })

  response.on('end', () => {
    console.log(JSON.parse(data))
  })
})

request.on('error', error => {
  console.log(`An error`, error)
}) 

request.end()