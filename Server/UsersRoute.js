const express = require("express");
const router = express.Router();
 const register = require("./Schemas/RegisterScheme");
const producted = require("./Routes/ProtectedRoute");

//admin//
//get all users//
router.get("/allusers", producted, async (req, res) => {
  if (res) {
    const data = await register.find().select(["-password"]);
    res.status(200).json(data);
  } else {
    res.status(403).json("unauthorised");
  }
});
module.exports = router;
