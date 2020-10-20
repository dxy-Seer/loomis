const Discord = require("discord.js");
const colors = require('../colors.json');
const GuildModel = require('../models/Guild')
const { connect } = require('mongoose');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
    const req = await GuildModel.findOne({ id: message.guild.id })
    if(!req){
        const doc = new GuildModel({ id: message.guild.id })
        await doc.save();
    }
    if(req.prefix == 'null'){
        var prefix = config.bot.prefix;
    } else {
        var prefix = req.prefix;
    }
     const helpEmbed = new Discord.MessageEmbed()
            .setColor(colors.info)
            .setTitle('**Help**')
            .setURL(config.siteUrl)
            .addFields(
                { name: '**Fun**', value: `${prefix}ping\n${prefix}prefix\n${prefix}server`, inline: true },
                { name: '**Admin**', value: `${prefix}setprefix\n${prefix}resetprefix\n${prefix}kick\n${prefix}clear`, inline: true },
            )
            .setTimestamp()
            .setFooter('© Wezacon.com', 'https://github.com/wezacon/dbos/blob/main/public/img/Wezacon-icon.png?raw=true');
 
    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help",
    aliases: []
}