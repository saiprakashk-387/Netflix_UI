const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const register = require("../Schemas/RegisterScheme");

router.post("/register", async (req, res) => { 
  try {
    var emailExists = await register.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: "Email Already Exists" });
    } else {
      var hash = await bcrypt.hash(req.body.password, 10);
       const newUser = await new register({
        name: req.body.name,
        email: req.body.email,
        role:req.body.role, 
        number:req.body.number,
        password: hash, 
      });
      const User = await newUser.save();
      res.status(200).json({User, message: "Registered Successfully",});
    }
  } catch (err) {
    res.status(400).json( { message: "Bad Request" });
  }
});

module.exports = router;

