const express = require('express');
const router = express.Router();
const User = require('../Schema/User');

router.patch('/update/:id', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const id = req.params.id;
        const new_data = req.body;

        let finddata = await User.findById(id);
        if (!finddata) { return res.status(404).json("Not Found") }
        const data = await User.findByIdAndUpdate(id, new_data, { new: true });

        res.send({ Updated_Succesfully: data });
    }
    catch (e) {
        res.status(500).send({ error: e });
    }
})
module.exports = router