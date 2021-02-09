module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Kayıt Komutları')
.addField('<:ndirmePng:708215767031742484> | m!erkek-rol ', '```Etiketlediğiniz rolü erkek kayıt rolü olarak belirler.```')
.addField('<:ndirmePng:708215767031742484> | m!erkek-sil ', '```Önceden belirlediğiniz erkek rolünü silersiniz.```')
.addField('<:ndirmePng:708215767031742484> | m!erkek ', '```Etiketlediğiniz kişiyi erkek olarak kaydedersiniz.```')
.addField('<:ndirmePng:708215767031742484> | m!kayıtsız-rol ', '```Etiketlediğiniz rolü kayıtsız rolü olarak belirler.```')
.addField('<:ndirmePng:708215767031742484> | m!kayıtsız-sil ', '```Önceden belirlediğiniz kayıtsız rolünü silersiniz.```')
.addField('<:ndirmePng:708215767031742484> | m!kadın-rol ', '```Etiketlediğiniz rolü erkek kadın rolü olarak belirler.```')
.addField('<:ndirmePng:708215767031742484> | m!kadın-sil ', '```Önceden belirlediğiniz kadın rolünü silersiniz.```')
.addField('<:ndirmePng:708215767031742484> | m!kadın ', '```Etiketlediğiniz kişiyi kadın olarak kaydedersiniz.```')
.addField('<:ndirmePng:708215767031742484> | m!yetkili-rol ', '```Etiketlediğiniz rolü kayıt yetkilisi rolü olarak belirler.```')
.addField('<:ndirmePng:708215767031742484> | m!yetkili-sil ', '```Önceden belirlediğiniz kayıt yetkilisi rolünü silersiniz.```')


.setFooter("Magic Bee © 2021")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt'],
  permLevel: 0
}

exports.help = {
  name: 'kayıt'
};// codare ♥
  