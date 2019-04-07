const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./Model/User');

mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/expressjsSample', err => {
    if(err){
        console.log(err);
        process.exit(1);
    }
});

app.post('/users', function (req, res) {
    const user = new UserModel(req.body);

    user.save().then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
  
app.get('/users', function (req, res) {
    UserModel.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
  
app.get('/users/:id', function (req, res) {
    UserModel.findById(req.params.id).exec().then(user => {
        res.json(user || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
  
app.put('/users/:id', function (req, res) {
    const user = new UserModel(req.body);

    user.update().then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
  
app.delete('/users/:id', function (req, res) {
    UserModel.remove(req.params.id).exec().then(user => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.listen(3000, err => {
    if (err) { 
        console.error(err); 
        return; 
    } 
    console.log('app listening on port 3000'); 
});