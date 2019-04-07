const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

function User(firstName, secondName, birthDay) {
    this.id= Date.now();
    this.firstName= firstName;
    this.secondName= secondName;
    this.birthDay= birthDay;
}

const users = [];

app.get('/', function (req, res, next) {
  res.sendFile( path.join(__dirname + '/main.html'));
});

app.post('/users', function (req, res) {
  const user = req.body;

  var userSave = new  User();
  userSave.birthDay = new Date(user.birthDay);
  userSave.firstName = user.firstName;
  userSave.secondName = user.secondName;

  users.push(userSave);
  res.json(userSave);
});

app.get('/users', function (req, res) {
  
  res.json(users);
});

app.get('/users/:id', function (req, res) {
  var id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);
  res.json(user);
});

app.put('/users/:id', function (req, res) {
  var id = parseInt(req.params.id);

  const getUser = req.body;

  const user = users.find(user => user.id === id);
  user.birthDay = new Date(getUser.birthDay);
  user.firstName = getUser.firstName;
  user.secondName = getUser.secondName;

  res.json(user);
});

app.delete('/users/:id', function (req, res) {
  var id = parseInt(req.params.id);

  const index = users.findIndex(user => user.id === id);
  const deletedUser = users[index];

  users.splice(index, 1);

  res.json(deletedUser);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));