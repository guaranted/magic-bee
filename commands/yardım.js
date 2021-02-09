module.exports.run = async (client, message, args) => {

let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Komut Listesi')
.addField('<:ekiPng:708215766687678505>  | Moderasyon Komutları', '```m!moderasyon```')
.addField('<:1770_AmongUs_Shy:795678179674292264>  | Genel Komutlar', '```m!genel```')
.addField('<:KupaPng:708215766973022278>  | Eğlence Komutları', '```m!eğlence```')
.addField('<:bancard:678668844059066404>| Koruma Komutları', '```m!koruma```')
.addField(' <:HashtagPng:708215767396778014> | Sunucu Kurma Komutları', '```m!sunucu```')
.addField('<:VipPng:708215767568613396> | Efekt Komutları', '```m!efekt```')
.addField('<:ndirmePng:708215767031742484>  | Kayıt Komutları', '```m!kayıt```')
.setFooter("Magic Bee © 2021")
.setDescription('<:MegafonPng:708215767211966534>  Yardıma ihtiyaç duyduğunuzda `m!canlıdestek` ile bizlere ulaşabilirsiniz')

.setTimestamp()
message.channel.send(embed)




}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};// codare ♥
  