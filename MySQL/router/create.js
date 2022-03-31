var express = require('express');
var router = express.Router();
const db = require('../database');

router.post("/create", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const Query = "INSERT INTO users(fullname,email,password) VALUES(?,?,?);"
    db.query(Query, [name, email, password], (err, result) => {
        if(err){
            return res.status(500).json("Database Error")
        }
        if (result) {
            res.status(200).json({ status: "Created", result });
        }
    })
})

router.post('/login', (req, res) => {

    const { email, password } = req.body;
    const Query = "SELECT * FROM users WHERE email =? AND password = ?;"
    db.query(Query, [email, password], (err, result) => {
        if(err){
            return res.status(500).json("Database Error")
        }
        if(!result[0]){
            res.status(401).json("Invalid Credentials");
        }
        else{
            res.status(200).json({id:result[0].id});
        }
    })

});

module.exports = router;
