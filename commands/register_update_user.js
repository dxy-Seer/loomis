const Discord = require("discord.js");
const UserMod = require('../models/User')
const { connect } = require('mongoose');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
    const req = await UserMod.findOne({ id: message.member.id })
    if(!req){
        const doc = new UserMod({ id: message.member.id })
        await doc.save();
    }
    if(req.id == 'null'){
        message.reply(`You have been registered into the database!`);
    } else {
        message.reply(`Your profile was updated in the database`);  
    }
    
}

module.exports.help = {
    name: "register",
    aliases: []
}