const express = require("express");
const router = express.Router();
const analytics = require("../Schemas/AnalyticsSchema");
const producted = require("../Routes/ProtectedRoute");

router.post("/addanalytics",producted, async (req, res) => { 
  try {
       const newUser = await new analytics({
        name: req.body.name, 
      });
      const User = await newUser.save();
      res.status(200).json({User, message: "Analytics Added Successfully",});
  } catch (err) {
    res.status(400).json( { message: "Bad Request" });
  }
});

router.get("/analyticsdata", producted, async (req, res) => {
    if (res) {
      const data = await analytics.find();
      res.status(200).json(data);
    } else {
      res.status(403).json("unauthorised");
    }
  });
module.exports = router;
