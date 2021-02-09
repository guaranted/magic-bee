module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Genel Komutları')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!afk ', '```Afk kalırsınız.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!anime ', '```İsmini yazdığınız animenin bilgilerini gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!avatar ', '```Avatarınızı gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!canlıdestek ', '```Destek sistemi oluşturur..```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!say ', '```Sunucu bilgilerini gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!spotify ', '```Etiketlediğiniz kişinin Spotifyda dinlediği şarkıyı gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!snipe ', '```Kanalda silinen son mesajı gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!tdk ', '```TDKdan arama yaparsınız.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!uptime ', '```Botun uptime bilgilerini gösterir.```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!yazdır ', '```Botun fake mesaj atmasını sağlar```')
.addField('<:1770_AmongUs_Shy:795678179674292264> | m!yardım ', '```Yardım menüsü açılır.```')

.setFooter("Magic Bee © 2020")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['genel'],
  permLevel: 0
}

exports.help = {
  name: 'kullanıcı'
};// codare ♥
  