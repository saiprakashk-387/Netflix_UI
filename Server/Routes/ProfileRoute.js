
const express = require("express");
const router = express.Router();
 const register = require("../Schemas/RegisterScheme");
const producted = require("../Routes/ProtectedRoute");

router.put("/profileUpdate/:id", producted, async (req, res) => {
    // {new:true},to get updated value frm db with no delay 
     try {
      const adminprofile = await register.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true}  
      );
      
      res.status(200).json({adminprofile, message: "profile Updated Successfully",});
    } catch (err) {
      res.status(400).json({ message: "Bad Request" });
    }
  });
  module.exports = router;
