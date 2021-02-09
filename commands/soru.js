module.exports.run = async (client, message, args) => {
 const Discord = require('discord.js');
      
      
      
    const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "Daha sonra tekrar sor",
    "İmkansız"
];






    var soru = args.join(' ');
  
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    

    if(!soru)
      return message.reply
      (new Discord.MessageEmbed().setColor("RANDOM").setTitle('Bir soru belirt. [Örn: m!soru ]'))
    else message.channel.send(new Discord.MessageEmbed() .setColor("RANDOM") .setTitle(soru) .setDescription(cevap))  
      
      
      
      
    


  
}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['soru'],
  permLevel: 0
}

exports.help = {
  name: 'soru'
};// codare ♥  
  