const Discord = require(`discord.js`)

exports.run = async(client, message)=> {
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
.setAuthor(`${user.tag} adlı kullanıcının avatarı.`)
.setImage(user.displayAvatarURL({dynamic : true, size :1024}))
.setTimestamp()
.setFooter(`${message.author.tag} tarafından istendi.`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}  adlı kullanıcının avatarı.` , message.author.avatarURL )
.setImage(message.displayAvatarURL({dynamic : true, size :1024}))
.setTimestamp()
.setFooter(`${message.author.tag} tarafından istendi.`)
message.channel.send(embed)
 }
};

exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: ["avatar","pp","pf"],
	permLevel: 0,
}

exports.help = {
	name: 'avatar',

}