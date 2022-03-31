const express = require('express');
const router = express.Router();
const User = require('../Schema/User');

router.get('/read', async (req, res) => {
    try {                                                           //async Try catch
        const data = await User.find();
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({ error: e });
    }

})

router.get('/read/:id', (req, res) => {
    // const data =User.findById(req.params.id)                     //Promise
    // .then((data)=>res.status(200).send(data))
    // .catch((e)=>res.status(500).send({error:e}))

    User.findById(req.params.id,(err, data) => {                    //Error Function
        if (err) res.status(500).send({ error: e });
        res.status(200).send(data);
    });
})
module.exports = router