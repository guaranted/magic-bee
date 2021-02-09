exports.run = function (client, message, args) {

let rps = ["**:moyai: taş**", "**:pencil: kağıt**", "**:scissors: makas**"]; //let's check rock , papper , scissors with its icons
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` 

                  }
  let choice = args.join(" ").toLowerCase(); //To extract the available choice of rps
    if (choice === '') return message.reply("Şaşırtıcı"); //wait a second to load all the choice that available
    if (choice !== "taş" && choice !== "kağıt" && choice !== "makas") return message.reply(` ${choice} doğru değil :P`); //If rps is found ; The bot will reply you a rock, papper, or scissors And if what you have choice is not available, it will reply with
    message.reply(random()); // random : The bot will choose either a rock or a paper or a scissors
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tks', 'rps', 'taş-kağıt-makas'],
    permLevel: 0
}

exports.help = {
    name: 'tkm',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner '
}