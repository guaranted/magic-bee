exports.run = async (client, message, args) => {


  
      
      const Discord = require('discord.js')
      const superagent = require('superagent'); //npm i superagent
   

    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/waifu"); //lets see wut we went
  let başlık = `Senin waifun!`
    
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
    aliases: ['waifu'],
    permLevel: 0
}

exports.help = {
    name: 'waifu',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'pat '
}