const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = require("../Schemas/RegisterScheme");
const key = require("../Constants/Index");

router.post("/login", async (req, res) => {
  try{
    let data;
    if (req.body.email) {
      data = await register.findOne({ email: req.body.email });
      if (!data) {
        return res.status(400).json({ message: "Email Not Exists" });
      }
    } else {
      data = await register.findOne({ number: req.body.number });
      if (!data) {
        return res.status(400).json({ message: "Number Not Exists" });
      }
    }
    var pwd = await bcrypt.compare(req.body.password, data.password);
    if (!pwd) {
      return res.status(400).json({ message: "Password Not Exists" });
    }
    var userToken = await jwt.sign({ email: data.email }, key.key);
    const { email, name, role, _id, number } = data;
  
   await res
      .header("auth", userToken)
      .json({
        data: { email, name, role, _id, number },
        token: userToken,
        message: "Login Successfully",
      });
  }catch(err){
    res.status(400).json({  message: "Bad Request"  });
  }
 
});

module.exports = router;
