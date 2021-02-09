const express = require("express");
require('events').EventEmitter.prototype._maxListeners = 100;
const app = express();
const http = require("http");
const db = require("quick.db");
const ms = require("parse-ms");
app.get("/", (request, response) => {
  console.log(`vito vito vito.`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr");
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.TOKEN);

// KANALLI HOŞGELDİN

// BOTU SESLİ KANALA SOKAR.

Date.prototype.toTurkishFormatDate = function(format) {
  let date = this,
    day = date.getDate(),
    weekDay = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  let monthNames = new Array(
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  );
  let dayNames = new Array(
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  );

  if (!format) {
    format = "dd MM yyyy | hh:ii:ss";
  }
  format = format.replace("mm", month.toString().padStart(2, "0"));
  format = format.replace("MM", monthNames[month]);

  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  format = format.replace("dd", day.toString().padStart(2, "0"));
  format = format.replace("DD", dayNames[weekDay]);

  if (format.indexOf("HH") > -1)
    format = format.replace("HH", hours.toString().replace(/^(\d)$/, "0$1"));
  if (format.indexOf("hh") > -1) {
    if (hours > 12) hours -= 12;
    if (hours === 0) hours = 12;
    format = format.replace("hh", hours.toString().replace(/^(\d)$/, "0$1"));
  }
  if (format.indexOf("ii") > -1)
    format = format.replace("ii", minutes.toString().replace(/^(\d)$/, "0$1"));
  if (format.indexOf("ss") > -1)
    format = format.replace("ss", seconds.toString().replace(/^(\d)$/, "0$1"));
  return format;
};

client.on("guildMemberAdd", async member => {
  let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt)
    .format("MM")
    .replace("01", "Ocak")
    .replace("02", "Şubat")
    .replace("03", "Mart")
    .replace("04", "Nisan")
    .replace("05", "Mayıs")
    .replace("06", "Haziran")
    .replace("07", "Temmuz")
    .replace("08", "Ağustos")
    .replace("09", "Eylül")
    .replace("10", "Ekim")
    .replace("11", "Kasım")
    .replace("12", "Aralık");

  let durum =
    Date.now() - member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7;
  const cezadb = new db.table("cezali");
  const cezalırol = cezadb.fetch(`cezali.${member.guild.id}`);
  const alınıcakrol = cezadb.fetch(`alinicakrol.${member.guild.id}`);

  if (durum) {
    member.roles.set([cezalırol]);
  } else {
    member.roles.set([alınıcakrol]);
  }
}); //'triquetra#1943 - discord.gg/codare

// afk
client.on("message", async message => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;

  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`
      );
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `${message.author}\`${kullanıcı.tag}\` şu anda AFK. \n Sebep : \`${sebep}\``
      );
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`
      );
      db.delete(`afk_${message.author.id}`);
    }
  }
});

client.on("message", msg => {
  if (msg.content === `${prefix}ping`) {
    msg.channel.send(client.ws.ping + "ms ");
  }
});

const botadi = "Vito";

client.on("guildBanAdd", async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`);
  const modlogkanal = guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir kişi sunucudan yasaklandı")
      .setThumbnail(user.avatarURL() || user.defaultAvatarURL)
      .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("guildBanRemove", async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`);
  const modlogkanal = guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir kişinin yasağı kaldırıldı")
      .setThumbnail(user.avatarURL() || user.defaultAvatarURL)
      .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("channelCreate", async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`);
  let entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_CREATE" })
    .then(audit => audit.entries.first());
  let user = client.users.cache.get(entry.executor.id);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (channel.type === "text") {
      let embed = new Discord.MessageEmbed()
        .setColor("#fffa00")
        .setAuthor("Bir Kanal Oluşturuldu")
        .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
        .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
        .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
        .setFooter(`${botadi} | Mod-Log Sistemi`)
        .setTimestamp();
      modlogkanal.send(embed);
    }
    if (channel.type === "voice") {
      let embed = new Discord.MessageEmbed()
        .setColor("#fffa00")
        .setAuthor("Bir Kanal Oluşturuldu")
        .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
        .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
        .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
        .setFooter(`${botadi} | Mod-Log Sistemi`)
        .setTimestamp();
      modlogkanal.send(embed);
    }
  }
});

client.on("channelDelete", async channel => {
  let entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  let user = client.users.cache.get(entry.executor.id);
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    if (channel.type === "text") {
      let embed = new Discord.MessageEmbed()
        .setColor("#fffa00")
        .setAuthor("Bir Kanal Silindi")
        .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
        .addField(`Silinen Kanalın Türü : `, `Yazı`)
        .addField(`Kanalı Silen : `, `<@${user.id}>`)
        .setFooter(`${botadi} | Mod-Log Sistemi`)
        .setTimestamp();
      modlogkanal.send(embed);
    }
    if (channel.type === "voice") {
      let embed = new Discord.MessageEmbed()
        .setColor("#fffa00")
        .setAuthor("Bir Kanal Silindi")
        .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
        .addField(`Silinen Kanalın Türü : `, `Ses`)
        .addField(`Kanalı Silen : `, `<@${user.id}>`)
        .setFooter(`${botadi} | Mod-Log Sistemi`)
        .setTimestamp();
      modlogkanal.send(embed);
    }
  }
});

client.on("roleDelete", async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`);
  let entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let user = client.users.cache.get(entry.executor.id);
  const modlogkanal = role.guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Silindi")
      .addField(`Silinen Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Silen : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("emojiDelete", async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`);
  let entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_DELETE" })
    .then(audit => audit.entries.first());
  let user = client.users.cache.get(entry.executor.id);
  const modlogkanal = emoji.guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Emoji Silindi")
      .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
      .addField(`Emojiyi Silen : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

client.on("roleCreate", async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`);
  let entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let user = client.users.cache.get(entry.executor.id);
  const modlogkanal = role.guild.channels.cache.find(
    kanal => kanal.name === modlogs
  );
  if (!modlogs) return;
  if (modlogs) {
    let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Oluşturuldu")
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp();
    modlogkanal.send(embed);
  }
});

//MESAJ LOG
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc);
  if (!scbul) {
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(
      `Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
        3}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(prefix)) return;
  let sc = await db.fetch(`modlogkanaly_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc);
  if (!scbul) {
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(
      `Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
        3}:${deletedMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

//Serendia'dan alınıp V12 Çevirilmiştir!

client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`
  
  
  
  _${message.guild.id}`) === true) {
    if (
      db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size
    ) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(
          `:tada: Başarıyla \`${db.fetch(
            `sayac_${message.guild.id}`
          )}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`
        )
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

  member.guild.channels.cache
    .get(channel)
    .send(
      `**${member.user.tag}** Sunucuya Katıldı :tada:! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı!`
    );
});

//BOT ENGEL,anti-baskın yada anti-raid

client.on("messageDelete", message => {
  const db = require("quick.db");
  db.set(`snipe.mesaj.${message.guild.id}`, message.content);
  db.set(`snipe.id.${message.guild.id}`, message.author.id);
});

client.on("message", async msg => {
  const i = await db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg.reply("Bu Sunucuda Küfür Filtresi Aktiftir.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = db.fetch(`${oldMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
          oldMessage.delete();

          return oldMessage.reply("Bu Sunucuda Küfür Filtresi Aktiftir.");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  if(!entry.executor.hasPermission('ROLE_DELETE')) {
      role.guild.roles.create({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });
   let emran = new Discord.MessageEmbed()
   .setColor('0x36393E')
   .setTitle(`Bir rol silindi !`)
   .setDescription(`Silinen rol adı ${role.name}, Rol koruma sistemi açık olduğu için rol geri oluşturuldu!`)
   client.channels.cache.get(kanal).send(emran)
  }
});

client.on("emojiDelete", async (emoji, message) => {
  
  let kanal = await db.fetch(`emotek_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
    
   let embbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Bir Emoji Silindi`)
   .setDescription(`Silinen Emoji: ${emoji.name}, Emoji Koruma Sistemi Açık Olduğundan Tekrar Eklendi!`)
   message.client.channels.cache.get(kanal).send(embbed)
  
  }

});

client.on('ready', () => require('quick.db').set('start', Date.now()))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberRemove", async member => {
  //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
  //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
  
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucudan Ayrıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/b9gm3E.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "Magic Bee-güle-güle.png"
  );

    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  
});

client.on("guildMemberAdd", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucuya Katıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/YcSOQM.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "Magic Bee-hosgeldin.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});







const data = require('quick.db')

client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await data.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const blacklist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Bu sunucuda reklam filtresi aktiftir!'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(blacklist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
   });

client.on("guildCreate", async guild => {
  const sahip = [
    "Bot sunucuna eklendi.Tebrikler dostum.",
    "Bu bot **simitli⍭puaca#7983** tarafından geliştirilmektedir.",
    'iyi günlerde kullan..'
  ];
  guild.owner.send(sahip);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});

client.on('guildCreate', guild => {

    let bigz = guild.channels.filter(c => c.type === "text").random()
    let embed = new Discord.MessageEmbed .setAuthor('Magic Bee sunucuna katıldı!').setThumbnail(client.user.avatarURL()).setDescription('Bu bot "simitli⍭puaça#7983" tarafından geliştirilmektedir. Bot ile alakalı herhangi bir probleminiz olduğu zaman ```m!canlıdestek``` komutu ile bizlere ulaşabilirsiniz. Magic Bee Botu içinde ```moderasyon```, ```eğlence```, ```sunucu koruma``` gibi komutlar içeren kullanışlı bir Discord botudur. Daha fazla bilgi için ```m!yardım``` komutunu kullanabilir,veya destek sunucumuza katılabilirsiniz. ').addField("**Destek Sunucusu**", "[Tıkla](https://discord.gg/36tBbdBcMG)")
    .addField("**Bot Davet Linki**", "[Tıkla](https://discord.com/oauth2/authorize?client_id=771674804909637632&permissions=8&scope=bot)")
    bigz.send(embed);
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'm!destek') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const { MessageEmbed } = require('discord.js');
    const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl =  message.author.displayAvatarURL({dynamic: true});
    const embed = new MessageEmbed()
    
      // Set the title of the field
      .setTitle('Magic Bee')
      // Set the color of the embed
      .setColor("YELLOW")
    .setFooter(`${message.author.tag} tarafından istendi`)
      // Set the main content of the embed
      .setDescription('Magic Bee Destek & Davet Linkleri')
   
    .addField("**Destek Sunucusu**", "[Tıkla](https://discord.gg/36tBbdBcMG)")
    .addField("**Bot Davet Linki**", "[Tıkla](https://discord.com/oauth2/authorize?client_id=771674804909637632&permissions=8&scope=bot)")
    .setImage('https://cdn.discordapp.com/attachments/796069549744193536/798830492375580692/Baslksz-1.png')
    .setThumbnail(client.user.avatarURL())
     .setTimestamp();
    
    
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', async msg => {
  if (msg.content === '<@&771674804909637632>') return msg.channel.send(`Prefixim ${ayarlar.prefix}`);
});




client.on('messageDelete', message => {
  const emirhan = require("quick.db")
  emirhan.set(`snipe.mesaj.${message.guild.id}`, message.content)
  emirhan.set(`snipe.id.${message.guild.id}`, message.author.id)

})


client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.length >= 5) {

const caps = await data.fetch(`caps.${message.guild.id}`);
if(!caps) return;

let kontrol = message.content.toUpperCase()
if(message.content === kontrol) {

if(message.member.permissions.has('BAN_MEMBERS')) return;
if(message.mentions.users.first()) return;

return message.delete();

}}});



client.on('message', async message => {
  if(message.channel.type !== 'text') return;
if(message.content.toLocaleLowerCase() === 'sa') {

const selamlar = await data.fetch(`selams.${message.guild.id}`);
if(!selamlar) return;

return message.reply('Aleyküm selam!')
}});


 client.on('guildMemberAdd', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  let rol;
  const otoRole = await data.fetch(`oto.role.${guild.id}`);
  if(otoRole) {
  rol = `>>> **Sunucuya katılan kullanıcıya ${guild.roles.cache.get(otoRole)} rolü direk verildi!**`
  } else {
  rol = ''
  }
  if(guild.memberCount >= sayı) {
  data.delete(`sayaç.sayı.${guild.id}`);
  data.delete(`sayaç.kanal.${guild.id}`);
  channel.send(`
  
  > ${user.tag} sunucuya katıldı. **Toplam da** \`${guild.memberCount}\` **Kişi olduk! Sayaç tamamlandı! 🎉**
  
  ${rol}`)
  } else {
  channel.send(`
  
  > ${user.tag} sunucuya katıldı. **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**
  
  ${rol}`)
  }
  
})

client.on('guildMemberRemove', async member => {
  let user = member.user;
  let guild = member.guild;
  const sistemKanalID = await data.fetch(`sayaç.kanal.${guild.id}`);
  if(!sistemKanalID) return;
  let channel = guild.channels.cache.get(sistemKanalID);
  const sistemSayı = await data.fetch(`sayaç.sayı.${guild.id}`);
  if(!sistemSayı) return;
  let sayı = Number(sistemSayı);
  if(!sayı) return;
  const attachment = new Discord.MessageAttachment('');
  channel.send(` 
  
  > ${user.tag} sunucudan ayrıldı. **Toplam da** \`${guild.memberCount}\` **Kişi olduk!** \`${sayı}\` **Kullanıcı olmasına** \`${sayı-Number(guild.memberCount)}\` **Kullanıcı kaldı!**`, attachment)
  
})

client.on("message", async (message , bot) => {
if (message.content.startsWith("m?spotify")) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }
    
    let convert = require('parse-ms')
    
    let status = user.presence.activities[0];
    
    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("Bu kullanıcı Müzik Dinlemiyor.");
    

      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          url = `https://open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = status.timestamps.start,
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);
      
      let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
      let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
      
      let time = `${minutes}:${seconds}`;
      
      const embed = new Discord.MessageEmbed()
      .setAuthor("Spotify Parça Bilgisi", "https://image.flaticon.com/icons/png/512/2111/2111624.png")
      .setColor(0x1ED768)
      .setThumbnail(image)
      .addField("İsim:", name, true)
      .addField("Albüm:", album, true)
      .addField("Artist:", artist, true)
      .addField("Süre:", time, false)
      .addField("Spotifyda Dinle!", `[\`${artist} - ${name}\`](${url})`, false)
      message.channel.send(embed)
    
  }
})

