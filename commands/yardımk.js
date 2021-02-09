module.exports.run = async (client, message, args) => {






let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});


let embed = new MessageEmbed()

.setColor("RANDOM")
.setTitle('<:BelgePng:708215766595534878> | Magic Bee Koruma Komutları')
.addField('<:bancard:678668844059066404> | m!caps ', '```Caps kısıtlama sistemini açar.```')

.addField('<:bancard:678668844059066404> | m!emojikoruma ', '```Bir emoji silindiğinde emojiyi geri yükler.```')
.addField('<:bancard:678668844059066404> | m!korumasistemi ', '```Genel korumayı açar.```')
.addField('<:bancard:678668844059066404> | m!küfür ', '```Küfür filtresini açar.```')

.addField('<:bancard:678668844059066404>| m!rolkoruma ', '```Bir rol silindiğinde rolü yeniden oluşturur.```')

.setFooter("Magic Bee © 2021")


.setTimestamp()
message.channel.send(embed)















}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['koruma'],
  permLevel: 0
}

exports.help = {
  name: 'koruma'
};// codare ♥
  