const Discord = require ('discord.js')
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "uptime", // الأسم
  aliases: ["up",""], // امر الأحتياط
  description: "Return how long the bot has been online", // دسكربشن تاع الأمر
  usage: ["!uptime,!up"], // كيف تستخدمه
  botPermission: [""], // صلاحيات لـ بوت
  authorPermission: [""], // صلاحيات المستخدم
  cooldowns: [], // كم لازم يستنى ليغير الأمر
  ownerOnly: true, // ذا الامر كان للأونر او لا لو كان ل الاونر سوي true
  run: async (client, message, args, config) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 25;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const embed = new Discord.MessageEmbed()
        .setColor('#d5d5d5')
        .setTitle('**Bot uptimer** 🕒')
        .setAuthor({name: message.author.tag,iconURL:
            message.author.avatarURL({dynamic:true})})
        .setThumbnail(client.user.avatarURL())
        .addFields(
            { name: 'days', value: `${days}`, inline: false },
            { name: 'hours', value: `${hours}`, inline: false },
            { name: 'minutes', value: `${minutes}`, inline: false },
            { name: 'seconds', value: `${seconds}`, inline: false },
        )
    
        message.channel.send({ embeds: [embed] })
        .catch((err) => {
            console.log(err.message)
          })
  } }