const Discord = require('discord.js');
const data = require('quick.db');
const prefix = 'm!';

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/796747672580390975/796747976223358986/Screenshot_4.png').setTitle('Bir hata oldu!').setDescription(`• \`${prefix}Trol-ver\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.discordapp.com/attachments/796747672580390975/796747976223358986/Screenshot_4.png'));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerine verilecek bir **ROL ID** belirtmedin! 🤔
**Örnek:**
\`\`\`${prefix}Trol-ver ${message.guild.roles.cache.random().id}\`\`\``).setColor('#f1c335'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerine verilecek bir **ROL ID** belirtmedin! 🤔
**Örnek:**
\`\`\`${prefix}Trol-ver ${message.guild.roles.cache.random().id}\`\`\``).setColor('#f1c335'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!').setDescription(`**Sunucunuzda ki üyelere yavaş yavaş ${message.guild.roles.cache.get(args[0])} adlı rol veriliyor.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(!a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.add(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['toplurol-ver'],
  permLevel: 0
}

exports.help = {
  name: 'Trol-ver'
};