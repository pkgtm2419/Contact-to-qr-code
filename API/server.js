require("rootpath")();
const express = require("express");
const cors = require("cors");
const port = 4057;
// const port = 4049;
const { hostname } = "103.149.113.100";
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");

dotenv.config();
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(log);
app.get("/", log);
function log(req, res, next) {
  var data = {timestamp: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString(), method: req.method, url: `http://${req.hostname}:${port}${req.url}`, ip: req.ip};
  console.log(data);
  next();
}

app.use(function(req,res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

app.get('/', (req, res) => {
  return res.status(200).send({status: true, message: 'YAY! Congratulations! Your first endpoint is working'});
});

app.use("/contact", require("./qrCode/qrCode.controller"));


app.listen(port, () => console.log(`Server is running on port: ${port}`));