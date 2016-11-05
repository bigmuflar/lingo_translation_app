var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes');

  mongoose.connect('mongodb://localhost/lingo');

  var app = express();

  app.use(express.static('public'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());

  Routes(app);


  app.listen(4000, () => {
    console.log('Server is listening!');
  });
