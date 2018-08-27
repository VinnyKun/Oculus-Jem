import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
// mongoose.Promise = global.Promise
// mongoose.connect(config.mongoUri)
// mongoose.connection.on('error', () => {
//   throw new Error(`unable to connect to database: ${mongoUri}`)
// })

// mongoose.connect(dbURI)
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose
.connect(CONNECTION_URI, {
  useMongoClient: true
})
.then(() => {
  console.log('connected to mongodb');
})
.catch(err => console.log(err));

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
