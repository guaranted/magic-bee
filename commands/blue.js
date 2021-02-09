const Discord = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586
  
  let user = message.mentions.users.first() || message.author;
  
  let ek = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/blueify?image=${user.avatarURL({size: 1024, format: 'png'})}`, `blueify.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte blueify efekti uygulanmış avatar!`)
  .setColor("RANDOM")
  .attachFiles(ek)
  .setImage(`attachment://blueify.png`)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['blueify'],
  permLevel: 0
};

exports.help = {//'Vu4ll#0586
  name: "blueify",
  description: "",
  usage: ""
};