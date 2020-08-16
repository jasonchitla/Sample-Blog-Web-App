require('dotenv').config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var blogsRouter = require("./routes/blogs");

var app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + process.env.CLIENT_PORT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/blogs", blogsRouter);

var listener = app.listen(process.env.SERVER_PORT, function() {
  console.log("Listening on port " + listener.address().port);
});
