///third party module
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); 

// var whitelist = [
//   "http://192.168.1.13:5050",
//   "http://localhost:5050",
//   "http://192.168.1.38:5050",
//   "http://localhost:2000",
//   "http://localhost:3000",
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

const port = process.env.PORT || 2050;

app.use(require("./UsersRoute"));
app.use(require("./Routes/RegisterRoute"));
app.use(require("./Routes/LoginRoute"));
app.use(require("./Routes/ProfileRoute"));
app.use(require('./Routes/AnalyticsRoute'))

const url = process.env.CONNECTION_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("mongoose connected successfully");
  }
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});

app.get("/", (req, res) => {
  res.json("Express.Js");
});
