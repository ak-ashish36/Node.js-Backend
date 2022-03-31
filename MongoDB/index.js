const connectToMongo = require('./database.js');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

//middleware-for accessing the body containt
app.use(express.json());

app.use('/api', require('./routes/create.js'))
app.use('/api', require('./routes/read.js'))
app.use('/api', require('./routes/update'))
app.use('/api', require('./routes/delete'))


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })