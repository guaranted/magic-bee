const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};

let reasonn;
if(!reason) reasonn = '. neden yok.';
if(reason) reasonn = ` for ${reason} reason.`;
message.channel.send(`<:OnayPng:708215767035936838>  ${channel} kanalı kilitlendi`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, +message.author.tag + 'tarafından kilitlendi');
channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle(channel.name+' kilitlendi.')
.setDescription(`Yetkililer ${channel}'i'${reasonn} sebebiyle kilitledi`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};// codare ♥