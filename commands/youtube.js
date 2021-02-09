const { MessageAttachment, MessageEmbed } = require('discord.js')
const YouTube = require("youtube-sr")
 
exports.run = async (client, message, args) => {
    let video = args.join("  ")
    let res = await YouTube.search(video, { limit: 1 })
    let body = res[0]
    let resim = body.thumbnail.url
    const attachment = new MessageAttachment(resim, "resim.png");
    let embed = new MessageEmbed()
    .addField('Açıklama', body.description)
    .addField('İzlenme', body.views.toLocaleString())
    .addField('Süre', body.durationFormatted)
    .addField('Yüklenme Tarihi', body.uploadedAt.replace('years', 'Yıl').replace('month', 'Ay').replace('day', 'Gün').replace('hours', 'Saat').replace('minutes', 'Dakika').replace('seconds', 'Saniye').replace('ago', 'Önce'))
    .addField('Yükleyen Kanal', `[${body.channel.verifed === true ? body.channel + '✔️' : body.channel.name}](${body.channel.url})`)
    .addField('Video Linki', '[Tıkla](' + 'https://www.youtube.com/watch?v=' + body.id + ')')
    .setAuthor(body.title, resim, 'https://www.youtube.com/watch?v=' + body.id)
    .setThumbnail("attachment://resim.png")
    .attachFiles(attachment)
    .setColor('FF0000')
    message.channel.send(embed)
}
 
exports.conf = { enabled: true, guildOnly: true, aliases: [], permLevel: 0 };
exports.help = { name: 'youtube', description: 'Youtubede Video Arar', usage: 'youtube <ad>' };