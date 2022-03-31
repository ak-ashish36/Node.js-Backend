const express = require('express');
const path = require("path");
const hbs = require('hbs');             //  Hbs Handlebars
const helpers = require('./views/helpers/hbsHelper');

const app = express();
const port =500;

//Make static path to public folder for using all the css js and image files to the folder
app.use('/',express.static(path.join(__dirname, 'public')));

// Handlebars SPECIFIC STUFF
app.set('view engine', 'hbs') // Set the template engine as hbs

const template_path = path.join(__dirname, 'views')
const partials_path = path.join(__dirname, 'views/partials');

app.set('views',template_path) // Set the views directory
hbs.registerPartials(partials_path) // Set the partials directory
for(let i in helpers){              // Registring all the helpers from hbsHelper.js
hbs.registerHelper(i,helpers[i]);
}

app.get('/',(req,res)=>{
    var props ={name:"ashish",age:17,gender:"M"}
    res.render('index.hbs',{props})
})
app.get('/about',(req,res)=>{
    res.render('about.hbs')
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port http://127.0.0.1:${port}`);
})