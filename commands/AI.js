const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Please say something!");

    fetch(`http://api.brainshop.ai/get?bid=153728&key=sEMPcX4scSn14Xnz&uid=1&msg=` + encodeURIComponent(mesg))
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.cnt);
        });
}

// Put the command args here (What calls it)
module.exports.help = {
    name: "c",
    aliases: []
}