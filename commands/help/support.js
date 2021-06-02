const { Client, MessageEmbed } = require('discord.js');

exports.run = async (Client, Message, Args) => {
Message.reply("Hey dude, I heard you needed Help? \n Head over to the support server and the support team can help you. \n https://discord.gg/JE6kqwYsf9 ")
}

exports.config = {
name: "support",
aliases: [""],
}