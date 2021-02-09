const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const codare = args.slice(0).join(' ');
  if (codare.length < 1) return message.channel.send('`Talep Açma Sebebinizi Belirtiniz. Troll destek taleplerini kullananlar botun karalistesine alınır.`')
    message.channel.send('`Destek Talebi Başarıyla Gönderildi,Yetkililerin Size Ulaşmasını BekLeyiniz.`');


    var Hook = new Discord.WebhookClient("796030434156347472", "_9H1LNE3SkFd01rHNtH8SHy47Q5UjKrRQd-SIDoJrK2-hcRL9ZygHRFN3FLrROz4LAdm")

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(message.author.avatarURL())
    .setTitle(`Destek Talebi!`)
    .setDescription(`
      **Talep Eden: **`+message.author.tag+`
      **Talep Sebebi: **\``+codare+`\`
      `)
    .setFooter(`Destek`)
    .setTimestamp()
    Hook.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['canlıdestek'],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'destek-al',
    description: 'Talebinizi belirterek destek alabilirsiniz.',
    usage: 'destek-al ',
   
  };