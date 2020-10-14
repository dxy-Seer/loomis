const Discord = require("discord.js");
const config = require('../config.json');
const color = require('../colors.json');

module.exports.run = async (bot, message, args) => {
    const Embed = new Discord.MessageEmbed();
        Embed.setColor(color.success);
        Embed.setTitle('**Server Info**')
        Embed.setURL(config.siteUrl)
        Embed.addFields(
            { name: '**Server Name**', value: `${message.guild.name}`, inline: true },
            { name: '**Users**', value: `${message.guild.memberCount}`, inline: true },
        )
    message.channel.send(Embed);
}

module.exports.help = {
    name: "server",
    aliases: ["si"]
}