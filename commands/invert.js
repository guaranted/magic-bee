const Discord = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586
  
  let user = message.mentions.users.first() || message.author;
  
  let ek = new Discord.MessageAttachment(`https://api.no-api-key.com/api/v2/invert?image=${user.avatarURL({size: 1024, format: 'png'})}`, `invert.png`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`İşte ters renk uygulanmış avatar!`)
  .setColor("RANDOM")
  .attachFiles(ek)
  .setImage(`attachment://invert.png`)
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {//'Vu4ll#0586
  name: "invert",
  description: "",
  usage: ""
};