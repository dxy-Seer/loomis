const { Schema, model } = require('mongoose');
const config = require('../config.json');

const Guild = Schema({
    id: String,
    prefix: {
        type: String,
        default: config.bot.prefix
    },
    blacklisted: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Guild', Guild);