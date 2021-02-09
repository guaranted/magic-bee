module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Sunucu Kur Komutları')
.addField('<:HashtagPng:708215767396778014>  | m!sunucukur ', '```Oyun temalı sunucu kurar.```')
.addField('<:HashtagPng:708215767396778014>  | m!publickur ', '```Public temalı sunucu kurar.```')
.addField('<:HashtagPng:708215767396778014>  | m!j4jkur ', '```J4J temalı sunucu kurar.```')

.setFooter("Magic Bee © 2020")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu'
};// codare ♥
  