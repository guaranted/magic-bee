const Discord = require('discord.js');
const data = require('quick.db');
const prefix = 'm!';

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/796747672580390975/796747976223358986/Screenshot_4.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${prefix}Trol-al\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.discordapp.com/attachments/796747672580390975/796747976223358986/Screenshot_4.png'));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔
**Örnek:**
\`\`\`${prefix}Trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔
**Örnek:**
\`\`\`${prefix}Trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!').setDescription(`**Sunucunuzda ki üyeler'den yavaş yavaş ${message.guild.roles.cache.get(args[0])} adlı rol alınıyor.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.remove(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['toplurol-al'],
  permLevel: 0
}

exports.help = {
  name: 'Trol-al'
};