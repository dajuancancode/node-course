const fs = require('fs')

const parsedJSON = JSON.parse(fs.readFileSync('1-json.json'))
parsedJSON.name = 'DaJuan'
parsedJSON.age = 29

const stringifiedJSON = JSON.stringify(parsedJSON)

fs.writeFileSync('1-json.json', stringifiedJSON)