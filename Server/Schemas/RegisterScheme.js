const mongoose = require("mongoose");

const register = mongoose.Schema({
  name:
   {
    type: String,
    require: true,
}
,
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  number :{   
    type:Number,
    require: true,
      },
   login_Status :Array,
},{timestamps:true});

module.exports = mongoose.model('register',register)