const Discord = require ('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'delete',
  aliases: ['del'],
  description: 'Close your support ticket.',
  usage: [],
  botPermission: ['MANAGE_CHANNELS', 'MANAGE_ROLES'],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    if (!message.channel.name.startsWith('ticket-')) return;
    const Delembed = new Discord.MessageEmbed()
    .setColor(`#d5d5d5`)
    .setDescription(`__**The Ticket will be deleted in \`5\` seconds**__`);
    
    message.channel.send({ embeds: [Delembed] }).then(timeembed => {
      setTimeout(() => message.channel.delete(), 5000);
        }).catch(async(error)=>{return console.log(error.message)})
    
  }};