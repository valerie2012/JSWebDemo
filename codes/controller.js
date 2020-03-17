var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = require('urlencoded-parser');
var app = express();
var usermodel = require('./basemodel.js')
var cors = require('cors');

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())

//app.get('/user/retrieve')
app.get('/user/retrieve', urlencodedParser, function (req, res) {
  console.log(req.body);
  var name = req.body.hello;

  //Fetch all data from the database
  const users = usermodel.query()
    .then(function (dataUsers) {
      console.log(dataUsers); // --> true
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dataUsers));
    })
    .catch(function (err) {
      throw new Error(err);
    })
  // end save to database
});


//Restful API

//app.post('/user/delete')
app.post('/user/delete', urlencodedParser, function (req, res) {
  console.log(req.body);
  var name = req.body.hello;

  // delete from database
  usermodel.query().delete({
    Name: name
  })

    .then(function (data) {
      console.log(data)
      res.send(name + " Deleted Successfully");

    }).catch(function (err) { throw new Error(err) })
  // end save to database

});


//app.post('/user/edit')
app.post('/user/update', urlencodedParser, function (req, res) {
  console.log(req.body);
  var name = req.body.hello;

  // Update to database
  usermodel.query().update({
    Name: name
  })

    .then(function (data) {
      console.log(data)
      res.send(name + " Updated Successfully");

    }).catch(function (err) { throw new Error(err) })
  // end save to database

});


app.post('/user', urlencodedParser, function (req, res) {
  console.log(req.body);
  var name = req.body.hello;

  // save to database
  usermodel.query().insert({
    Name: name
  })

    .then(function (data) {
      console.log(data)
      res.send(name + " Submitted Successfully");

    }).catch(function (err) { throw new Error(err) })
  // end save to database

});


var port = 3000
app.listen(port, function (err) {

  console.log('Listening to port:' + port)
})

