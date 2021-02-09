const { MessageEmbed, MessageAttachment } = require('discord.js');

exports.run = (client, message, args) => {
 let user = args.join(' ')
 if(!user) return message.channel.send(new MessageEmbed().setDescription('Bir kullanıcı adı girmelisin!').setColor('FF0000'))
 let attachment = new MessageAttachment(`https://feelinsonice.appspot.com/web/deeplink/snapcode?username=${encodeURI(user)}&size=1280&type=PNG`, 'icon.png')
 let embed = new MessageEmbed()
 .attachFiles(attachment)
 .setColor('YELLOW')
 .setImage('attachment://icon.png')
 .setAuthor('Aranan Sonuç : ' + user.toUpperCase(), 'https://img.utdstc.com/icon/ffe/432/ffe43263590fd5db3e928bd915412b6f3155edafc00ac1b48879f62c111ee0ec:200')
 message.channel.send(embed)
};

exports.conf = { enabled: true, guildOnly: false, aliases: ['sc'], permLevel: 0 };
exports.help = { name: 'snapchat', description: 'Snapchat QR kodu atar.', usage: 'snapchat [kullanıcı]' };