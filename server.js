'use strict';


var fs = require('fs');
var express = require('express');
var app = express();
var multer = require('multer'),
	bodyParser = require('body-parser'),
	path = require('path');

// view engine setup


app.use(express.static('public'));

app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.sendFile(__dirname+'/views/index.html');
});

app.post('/api/fileanalyse', multer({ dest: './uploads/'}).single('upfile'), function(req,res){
	console.log('{name: '+req.file.originalname+', size: '+req.file.size+'}'); //form files
  var fsize = req.file.size;
	res.json({name: req.file.originalname, size: fsize});
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
