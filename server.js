"use strict";

let express = require('express');
var path = require('path');

let app = new express();
let port = 3000;

app.use(express.static(path.join(__dirname, 'lib')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/products.json', function (req, res) {
  res.sendFile(__dirname + '/src/mock/products.json')
});

app.get('/order.json', function (req, res) {
  res.sendFile(__dirname + '/src/mock/order.json')
});

app.get('/province.json', function (req, res) {
  res.sendFile(__dirname + '/src/mock/province.json')
});

app.get('/city.json', function (req, res) {
  res.sendFile(__dirname + '/src/mock/city.json')
});

app.get('/area.json', function (req, res) {
  res.sendFile(__dirname + '/src/mock/area.json')
});

app.listen(port, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.info("Listening on port %s!", port);
  }
});