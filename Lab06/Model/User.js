const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    secondName : {
        type: String,
        required: true
    },
    birthDay : {
        type: Date
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
