exports.run = async (client, message, args) => {
  
  let nn = new Discord.MesageEmbed
  let Discord = require('discord.js')
  let prefix = 'm!'
  
  const slms = {
  "sa": "as",
  "slm": "aslm",
  "selamun aleyküm": "aleyküm selam",
  "saaaa": "aaaas"
   };
   
  
  
  if(!args[0]) return message.channel.send(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`Sa-as sistemini açmak için ${prefix}sa-as aç`))
 if(args[0] == 'aç') {
   
   
   
   
   
 }
  
  
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['benmalım31'],
    permLevel: 0
}

exports.help = {
    name: 'öp',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'pat '
}