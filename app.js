'use strict';

const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const nunjucks = require('nunjucks');
const Sequelize = require('sequelize');
const volleyball = require('volleyball');
const express = require('express');
const db = require('./models')
const router = require('./routes');

const app = express();



app.use(morgan('dev'));
app.use(volleyball);
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });



app.use('/', router);

app.use(function(err, req, res, next){
  console.log(err);
  res.status(505);
  res.send(err);
  next(err);
});


db.sync()
.then(() => app.listen(3333, function(){
  console.log('I hear you.')
}));
