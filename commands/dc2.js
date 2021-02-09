const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const doğruluk = ['Bir zaman makinen olsa hangi zaman dönemine giderdin?',
                    'Hiç hipnotize edildin mi?',
                    'Zeka ve güzellik arasında bir seçim yapmak zorunda kalsan neyi seçerdin?',
                    'Daha önce sana verilmiş en kötü hediye nedir?',
                    'Hayatın film olsa seni kim oynardı?',
'Kaç kere evden gizlice sıvıştın?',
'Dilini burnuna değdirebilir misin?',
'Dünyada herhangi bir yerde yaşayabilsen nerede yaşardın?',
'Hayatının en iyi günü hangisiydi?',
'Herhangi bir sporla uğraşıyor musun?',
'Çekici olduğunu düşündüğün bir öğretmenin oldu mu hiç? Kim? Neden?',
'Günlük tutuyor musun?',
'Bir çöpçatanlık sitesine üye olur muydun?',
'Birine şimdiye kadar yaptığınız en fena eşek şakası nedir?',
'Küçükken en sevdiğin çizgi film hangisiydi?',
'En kötü öpüşmen hangisiydi?',
'Hiç birinin arabasına kustun mu?',
'Zeki mi olmayı tercih edersin yoksa mutlu olmayı mı ve neden?',
'Hiç cinsel yolla bulaşan bir hastalığın oldu mu?',
'Bisiklete binmeyi ne zaman öğrendin?',
'Para diye bir şey olmasa ne yapmak isterdin?',
'Hiç uykunda yürüdün mü?',
'Çıplak uyur musun?',
'Hiç bir şeyi kırıp da başka birini suçladığın oldu mu?',
'Hiç eve birilerini gizlice soktun mu?',
'Seninle ilgili en garip şey ne? Bununla gurur duyuyor musun?',
'Favori Disney karakterin kim?',
'Bir günlüğüne görünmez olsan ne yapardın?',
'Telefonunda arattığın en kötü şey nedir?',
'Bir sabah karşı cins olarak uyansan ilk yapacağın ne olurdu?']
    ////////////////////////////////////////////////////////////////////////////////
     const cesaret = ['Bir tur boyunca maymun gibi davran.',
                  'Bebek sesiyle şarkı söyle.',
                  'Odandaki en garip eşyanın fotoğrafını at.',
                  'Rastgele birine senden nefret ediyorum mesajı at.',
                  '2 tur boyunca ana dilin haricinde bir dille konuş.',
                  'Karşı cinste en çekici bulduğun şey nedir?',
                  'Alfabeyi tersten söyle.',
                  'Eski sevgiline onu özlediğini söyleyen bir mesaj gönder. (Ekran görüntüsü atman lazım.)',
                  'Söyleceğin her şeyden sonra "31" de.',
                  'Sevgiline atabileceğin en acımasız mesajı at. (Ekran görüntüsü atman lazım)',
                  '3 kişiye senden hoşlanıyorum diye mesaj at. (Ekran görüntüsü atman lazım.)',
                  'Son Whatsapp konuşmanı ss at.',
                  'Çok yüksek bir sesle bağır.']
    
    var dogrulukcevap = doğruluk[Math.floor(Math.random() * doğruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send('Lütfen sadece `doğruluk (d)` veya `cesaret (c)` ile cevap verin.') 
        }
        if (choice == 'cesaret' || choice == 'c') return message.channel.send(cesaretcevap)
    }
   

    


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};