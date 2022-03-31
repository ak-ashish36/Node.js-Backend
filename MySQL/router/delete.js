var express = require('express');
var router = express.Router();
const db  = require('../database');

router.delete("/delete/:id",(req,res)=>{

    const id = req.params.id;
    const Query = "DELETE FROM users WHERE id = ?;"

    db.query(Query,id,(err,result)=>{
        if(err){
            return res.status(500).json("Database Error")
        }
        res.status(200).send({status:"Deleted",result});
    })
})

module.exports = router;
