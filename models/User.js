const { Schema, model } = require('mongoose');
const config = require('../config.json');

const User = Schema({
    id: String,
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', User);