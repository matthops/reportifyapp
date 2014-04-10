var mongoose = require ("mongoose");

var express = require ('express');

var app = express();
app.use(express.bodyParser());

mongoose.connect("mongodb://Matt:password@ds033419.mongolab.com:33419/reportify");

var port = process.env.PORT || 5000;

app.listen(port)


