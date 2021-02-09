const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('en');

exports.run = async (client, message, args) => {//Can°B#1308

const startTime = await data.fetch('start');
const humanize = require("humanize-duration");
let ölçüm = Date.now() - startTime;
let result = humanize(ölçüm, { language: "tr", round: true, conjunction: " , ", serialComma: false });

const uptime = new Discord.MessageEmbed().setAuthor(client.user.username, client.user.avatarURL({dynamic: true})).setColor('#65fdae')
.addField('Yerel Saat', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'))
.addField('Aktif Kalma', result.toString().replace('ago', ''), true)
.addField('Kullacıcılar', '```'+client.users.cache.filter(a => !a.bot).size+'```', true)
.addField('Başlama', moment(startTime).format('YYYY-MM-DD HH:mm:ss'), true);
message.channel.send(uptime).then(s => s.delete({timeout: 20000}))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'uptime'
};// codare ♥