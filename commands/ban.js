const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
   var gif = ['https://tenor.com/view/kivanc-kuzey-gif-9197199',
                'https://media.giphy.com/media/hc4EQws8rmUPdUGcWy/giphy.gif',
                 'https://media.tenor.com/images/4407c64225a69a85faf0165e04b3aea5/tenor.gif',
              'https://media.tenor.com/images/8c3f475a77bbfd45775cc8a2c76d3e18/tenor.gif',
              'https://media.tenor.com/images/fd06e6573a98b4209d9bd4892bd52a10/tenor.gif'
                ]
      
      let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('Lütfen sebep giriniz');
      
       const user = message.mentions.users.first();
   
    if (user) {
      
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        
        member
          .ban({
            
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(gif[Math.floor(Math.random() * gif.length)]);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
          if(member.id === "792715211731238923") return message.reply('<:reddetmekpng:708215767270686761> Beni banlayamazsın :)')
      if(member.id === message.author.id) return message.reply('<:reddetmekpng:708215767270686761> Kendini banlayamazsın!')
      if(member.id === "432150936534646805") return message.reply('<:reddetmekpng:708215767270686761> Sahibi banlayamazsın.')
          
          
            message.reply('<:reddetmekpng:708215767270686761> Üyeyi banlayamadım./Benden daha yüksek bir rolü olabilir.');
          
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Üyeyi bulamadım");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Banlamam için birini etiketlemen lazım!");
    }
  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "mod"
};
exports.help = { 
	name: 'ban', 
	description: 'Belirttiğiniz kişiyi sunucudan banlarsınız.', 
	usage: 'ban' 
}