const Discord = require ('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite", 
  aliases: ["inv",""], 
  description: "Return the invite link of the bot", 
  usage: ["!invite,!inv"], 
  botPermission: [""], 
  authorPermission: [""], 
  cooldowns: [], 
  ownerOnly: true, 
  run: async (client, message, args, config) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#d5d5d5')
    .setTimestamp()
    .setTitle(':arrow_right: Invite Me')
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client. user.id}&permissions=0&scope=bot`)
    .setAuthor({name: message.author.tag,iconURL: 
        message.author.avatarURL({dynamic:true})})

    message.channel.send({ embeds: [embed] })
    message.react(`✅`)
  } }