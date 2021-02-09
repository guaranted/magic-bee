module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Yetkili Komutları')
.addField('<:ekiPng:708215766687678505> | m!ban ', '```Etiketlediğiniz kullanıcıyı yasaklar.```')
.addField('<:ekiPng:708215766687678505> | m!duyuru ', '```Sunucuda duyuru yapmanızı sağlar.```')
.addField('<:ekiPng:708215766687678505> | m!emoji ', '```Emoji ekler.```')
.addField('<:ekiPng:708215766687678505> | m!isim ', '```Etiketlediğiniz kullanıcının ismini değiştirir.```')
.addField('<:ekiPng:708215766687678505> | m!lock ', '```Etiketlediğiniz kanalı veya mesaj kanalınının yazma iznini kapatır.```')
.addField('<:ekiPng:708215766687678505> | m!modlog ', '```Log sistemini aktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!nuke ', '```Kanalı siler ve yeni bir kopyasını oluşturur.```')
.addField('<:ekiPng:708215766687678505> | m!kick ', '```Etiketlediğiniz kullanıcıyı sunucudan atar.```')
.addField('<:ekiPng:708215766687678505> | m!giriş-çıkış-ayarla ', '```Resimli giriş-çıkış sistemini aktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!giriş-çıkış-sıfırla ', '```Resimli giriş-çıkış sistemini deaktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!oyla ', '```Oylama yaparsınız.```')
.addField('<:ekiPng:708215766687678505> | m!otorol ', '```Otorol sistemini aktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!sayaç ', '```Sayaç sistemini aktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!sayaçkapat ', '```Sayaç sistemini deaktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!selam ', '```Selam mesaj sistemini aktif edersiniz.```')
.addField('<:ekiPng:708215766687678505> | m!slowmode ', '```Kanala yazma süresini kısıtlarsınız.``` ')
.addField('<:ekiPng:708215766687678505> | m!temizle ', '```Belirttiğiniz kadar mesajı siler.```')
.addField('<:ekiPng:708215766687678505> | m!mute ', '```Etiketlediğiniz kullanıcıyı susturursunuz.```')
.setFooter("Magic Bee © 2021")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['moderasyon'],
  permLevel: 0
}

exports.help = {
  name: 'yetkili'
};// codare ♥
  