const Discord = require("discord.js")



exports.run = async (client, message, args) => {
 

       const Discord = require('discord.js');
      const random = Math.floor(Math.random() * 100) + 1
      let { MessageEmbed } = require('discord.js')
      
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`%${random} Efkarlısınız.`)
      
      message.channel.send(embed)

 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'efkar'
};