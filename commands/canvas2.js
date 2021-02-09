const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`
    );
  //Resađ Seferov?#0809
  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<:reddetmekpng:708215767270686761> Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
      .setColor("RED")
      .setTimestamp(`<:reddetmekpng:708215767270686761> Ayarlamak İçin ${prefix}giriş-çıkış-ayarla #kanal`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`<:OnayPng:708215767035936838> Giriş Çıkış Başarıyla Sıfırlandı`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["giriş-çıkış-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "giriş-çıkış-kapat",
  description: "Giriş çıkışı kapatır",
  usage: "giriş-çıkış-kapat"
};
