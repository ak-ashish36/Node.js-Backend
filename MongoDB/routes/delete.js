const express = require('express');
const router = express.Router();
const User = require('../Schema/User');

router.delete('/delete/:id', async(req,res)=>{
    try{
    id =req.params.id;

    let finddata = await User.findById(id);
    if (!finddata) { return res.status(404).json("Not Found") }
    const data = await User.findByIdAndDelete(id);
    res.status(201).send({Deleted_Succesfully:data});
    }
    catch(e){
        res.status(500).send({error:e});
    }
})
module.exports = router