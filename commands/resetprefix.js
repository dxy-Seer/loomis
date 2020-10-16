const Discord = require("discord.js");
const GuildModel = require('../models/Guild')
const { connect } = require('mongoose');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You are missing the following permissions: `ADMINISTRATOR`');
    const req = await GuildModel.findOne({ id: message.guild.id })
    if(!req){
        const doc = new GuildModel({ id: message.guild.id })
        await doc.save();
    }
    if(req.prefix == 'null'){
        const doc = await GuildModel.findOneAndUpdate({ id: message.guild.id}, { $set: { prefix: config.bot.prefix }}, { new: true })
        message.reply(`Set the prefix to: \`${doc.prefix}\``)
    } else {
        const doc = await GuildModel.findOneAndUpdate({ id: message.guild.id}, { $set: { prefix: config.bot.prefix }}, { new: true });
            message.reply(`Set the prefix to: \`${doc.prefix}\``)
    } 
}

module.exports.help = {
    name: "resetprefix",
    aliases: []
}