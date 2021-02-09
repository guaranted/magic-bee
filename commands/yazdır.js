exports.run = async (client, message, args) => {
  let mesaj = args.join(" ") 
message.delete()
  if(!mesaj) return message.channel.send('Yazmam için bir şey yazmalısın')
  message.channel.send(mesaj)

}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yazdır'],
  permLevel: 0
}

exports.help = {
  name: 'yaz'
};//