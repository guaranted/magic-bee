exports.run = async (client, message, args) => {//Can°B#1308
const fights = require('../data/fights.json'); 
    let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('Birini etiketlemen lazım'); //if you didnt mention anyone , return as
  if(message.mentions.users.first().id === "771674804909637632") return message.reply('Benimle dövüşemezsin :C'); //lets make a some reply as fun
  if(message.mentions.users.first().id === "432150936534646805") return message.reply('Sahibimle dövüşemezsin   :wink:'); //lets make your friends is cannot fight you
      message.channel.send(`${message.author.username} is fighting vs ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)// lets export a random respond
  

  
  }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dövüş'],
    permLevel: 0
}

exports.help = {
    name: 'kavga',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'pat '
}