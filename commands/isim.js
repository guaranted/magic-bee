const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`ADMİNİSTRATOR\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin ')
  if (!isim) return message.channel.send('Bir isim yazmalısın ')
  member.setNickname(`${isim}`)
  message.react('708215767035936838')
  const embed = new Discord.MessageEmbed()
  .addField(`<:OnayPng:708215767035936838>  Kullanıcının takma adı değiştirildi.`, `Kullanıcı adını başarıyla \` ${isim}\` olarak ayarladım!`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)  
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'nick <yeni nick>'
}