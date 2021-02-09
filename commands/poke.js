
exports.run = async (client, message, args) => {


  
      
      const Discord = require('discord.js')
      const superagent = require('superagent'); //npm i superagent
   

   if (!message.mentions.users.first()) return message.reply("Birini etiketlemen lazım  "); //if no one is mentions , lets reply as
    if (message.mentions.users.first().id === "482128001828651008") return message.channel.send('<a:yayyy:497742636439044096>'); //lets make a some a some funny reply |you can set a random emoji|
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke"); //lets see wut we went
  let başlık = `${message.author.tag}, ${message.mentions.users.first().username} kullanıcısını okşadı!`
    
    const embed = new Discord.MessageEmbed() //onec Discordjs is updated to 12.2.0 , richembed is removed ! they replaced now as MessageEmbed
    .setColor("#3bb9ff") //you can set it as you went
     //lets reply as 
    .setImage(body.url) // lets showing pat (GIF}
    .setFooter(`${message.author.tag}`); //your personnel Footer
    message.channel.send(başlık)
  message.channel.send(embed)


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['poke'],
    permLevel: 0
}

exports.help = {
    name: 'poke',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'pat '
}