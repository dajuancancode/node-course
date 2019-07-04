const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  db.collection('tasks').findOne({ _id: new ObjectID("5d1d33f3fe0938e7f86bf22e") }, (err, res) => {
    return  err ? console.log('Unable to fetch') : console.log(res)
  })

  db.collection('tasks').find({completed: false}).toArray((err, tasks) => {
    return err ? console.log('Unabel to fetch') : console.log(tasks)
  })
})