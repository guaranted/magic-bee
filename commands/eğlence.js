module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Eğlence Komutları')
.addField('<:KupaPng:708215766973022278>| m!adam-asmaca ', '```Adam asmaca oyununu oynarsınız.```')
.addField('<:KupaPng:708215766973022278>| m!aşk ', '```Etiketledğiniz kişi ile aranızdaki aşkı ölçer.```')
.addField('<:KupaPng:708215766973022278> | m!banner ', '```Yazdığınızı bannera dönüştürür.```')
.addField('<:KupaPng:708215766973022278> | m!efkar ', '```Efkarınızı ölçer.```')
.addField('<:KupaPng:708215766973022278> | m!espri ', '```Bot rastgele espri yapar.```')
.addField('<:KupaPng:708215766973022278>| m!dc ', '```Doğruluk cesaret oynarsınız.```')
.addField('<:KupaPng:708215766973022278>| m!gerigelsin ', '```Kişinin geri gelip gelmeyeceğini tahmin eder.```')
.addField('<:KupaPng:708215766973022278>| m!sarıl ', '```Etiketlediğiniz kişiye sarılırsınız.```')
.addField('<:KupaPng:708215766973022278>| m!sayıtahmin ', '```Botun tuttuğu sayıyı bilmeye çalışırsınız```')
.addField('<:KupaPng:708215766973022278>| m!soru ', '```Bota soru sorarsınız,cevap verir.```')

.addField('<:KupaPng:708215766973022278>| m!okşa ', '```Etiketlediğiniz kişiye okşarsınız.```')
.addField('<:KupaPng:708215766973022278>| m!öp ', '```Etiketlediğiniz kişiyi öpersiniz.```')
.addField('<:KupaPng:708215766973022278>| m!tokat ', '```Etiketlediğiniz kişiyi tokatlarsınız.```')
.addField('<:KupaPng:708215766973022278>| m!sayı ', '```Botun tuttuğu sayıyı bulmaya çalışırsınız.```')
.addField('<:KupaPng:708215766973022278>| m!tkm ', '```Botla taş kağıt makas oynarsınız.```')
.addField('<:KupaPng:708215766973022278>| m!kaçcm ', '```Malafat boyunu ölçer.```')

.setFooter("Magic Bee © 2020")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['eğlence'],
  permLevel: 0
}

exports.help = {
  name: 'eğlenec'
};// codare ♥
  