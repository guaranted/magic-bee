const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("<:reddetmekpng:708215767270686761> Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<:OnayPng:708215767035936838> Anti-raid sistemi başarıyla açıldı");
  }

  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "<:reddetmekpng:708215767270686761> Anti-raid açılmamış. Açmak için **m!anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<:OnayPng:708215767035936838> Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "<:reddetmekpng:708215767270686761> Lütfen geçerli işlem girin. Örnek: **anti-raid aç/kapat**"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['antiraid'],
  permLevel: 0
};
exports.help = {
  name: "anti-raid"
};
