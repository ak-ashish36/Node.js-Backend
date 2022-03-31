var express = require('express');
var router = express.Router();
const db  = require('../database');

router.get("/read",(req,res)=>{
    const Query = "SELECT * FROM users;"
    db.query(Query,(err,result)=>{
        if(err){
            return res.status(500).json("Database Error")
        }
        if(!result[0]){
            res.status(404).json("Not found");
        }else{
            res.status(200).send(result);
        }
        
    })
})

router.get("/read/:id",(req,res)=>{

    const id = req.params.id;
    const Query = "SELECT * FROM users WHERE id = ?"
    db.query(Query,id,(err,result)=>{
        if(err){
            return res.status(500).json("Database Error")
        }
        if(!result[0]){
            res.status(404).json("Not found");
        }else{
            res.status(200).send(result[0]);
        }
    })
})

module.exports = router;
