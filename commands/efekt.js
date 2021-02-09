module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Efekt Komutları')
.addField('<:VipPng:708215767568613396>  | m!blueify ', '```Avatarınıza blueify efekti ekler.```')
.addField('<:VipPng:708215767568613396> | m!customify ', '```Avatarınıza customify efekti ekler.```')
.addField('<:VipPng:708215767568613396>  | m!darken ', '```Avatarınıza darken efekti ekler.```')
.addField('<:VipPng:708215767568613396>  | m!invert ', '```Avatarınızı tersine döndürür.```')
.addField('<:VipPng:708215767568613396> > | m!purplify ', '```Avatarınıza purplify efekti ekler.```')
.addField('<:VipPng:708215767568613396>  | m!shoot ', '```Avatarınıza shoot efekti ekler.```')
.addField('<:VipPng:708215767568613396>  | m!snow ', '```Avatarınıza kar efekti ekler.```')

.setFooter("Magic Bee © 2021")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['efekt'],
  permLevel: 0
}

exports.help = {
  name: 'efekt'
};// codare ♥
  