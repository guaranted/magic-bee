const Discord = require("discord.js")

exports.run = async (client, message, args) => {

   const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Nuke Komutu")
  
  .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n Onaylamak için <:OnayPng:708215767035936838> emojisine, Red etmek içinse <:reddetmekpng:708215767270686761> emojisine tıklayabilirsiniz\n")
  message.channel.send(onayembed).then(msg => {
msg.react('708215767035936838').then(() => msg.react('708215767270686761'));

const filter = (reaction, user) => {
	return ['<:OnayPng:708215767035936838>', '<:reddetmekpng:708215767270686761>'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === ':OnayPng:') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		} else {
			message.reply('<:reddetmekpng:708215767270686761> Nuke işlemi iptal edildi!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('<:reddetmekpng:708215767270686761> Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
