const Discord = require("discord.js");

exports.run = (client, message, args) => {
   if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`<:reddetmekpng:708215767270686761> Bir seçenek belirt`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.tag, client.user.avatarURL())
        .setTitle(`<:ListePng:708215766754918512> Magic Bee  Oylama Sistemi`)
                       
                       .addField(`**${question}**`, 'Oylamak için emojilere basın!')
    )
    .then(function(message) {
      message.react("708215767035936838");
      message.react("708215767270686761");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama", "oyla"],
  permLevel: 0
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: ".oylama "
};
