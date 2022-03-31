var express = require('express');
var router = express.Router();
const db  = require('../database');

router.patch("/update/:id",(req,res)=>{

    const id = req.params.id;
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    const Query = "UPDATE users SET fullname = ?,email =?,password=? WHERE id=?;"

    db.query(Query,[name,email,password,id],(err,result)=>{
        if(err){
            return res.status(500).json("Database Error")
        }
        res.status(200).send({status:"Updated",result});
    })
})
module.exports = router;
