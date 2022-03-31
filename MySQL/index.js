const express = require('express')
const app = express()
const port = 5000;
const db  = require('./database');

//middleware-for accessing the body containt
app.use(express.json());

app.use('/api',require("./router/create"));
app.use('/api',require("./router/read"));
app.use('/api',require("./router/update"));
app.use('/api',require("./router/delete"));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})