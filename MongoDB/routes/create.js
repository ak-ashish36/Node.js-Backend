const express = require('express');
const User = require('../Schema/User');
const router = express.Router();

router.post('/create', async (req, res) => {
  // const obj = new User({
  //   name: req.body.name,
  //   password: req.body.password,
  //   email: req.body.email,
  // })
  // try {                                                  // Async try catch
  //   await obj.save();
  //   res.status(200).json(obj);
  // } catch (error) {
  //   res.status(500).json(error.message);
  // }
  
  // obj.save()                                            //another way of saving data  Promise
  //   .then(() => res.status(200).send(obj));
  //   .catch((error) => res.status(500).json(error.message));

  User.create({                                        // automatically saves no need to save again
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  },(err,data)=>{
    if(err){res.status(500).json(err.message);}
    else{res.status(200).send(data)}
  })

})

// Authenticate a User using: POST "/api/login".
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if ((!user)) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    if (password !== user.password) {
      return res.status(400).json({ error: "Wrong Password" });
    }
    res.json({id:user.id})
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router