// Install Express JS by 'npm i express'
const express = require("express");
const path =require('path');

const app = express();
const port = 5000;
 
//Sending Response
// app.get("/", (req, res)=>{ 
//     res.status(200).send("<h1>Hello,World!, This is homepage of my first express app</h1>");
// });

//Sending Json file as response
app.get('/json', function(req, res) {
    res.json({"name":"Ashish","id":10,"gender":"M"});
});

//Serving Static Folders
app.use('/', express.static('public'));

app.get("/", (req, res)=>{ 
    // Serving HTML Files
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

//Slug
app.get('/name/:user_input',(req,res)=>{
  res.send("Hello "+req.params.user_input);
})

// Router
const router1 = require("./router/mobile");
app.use('/mobile',router1);
app.use('/books',require("./router/books"));

app.listen(port, ()=>{
    console.log(`The application started successfully on port http://127.0.0.1:${port}`);
})