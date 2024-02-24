const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")

module.exports = {
    name: "BOTMAKER_Close",
    aliases: ["", ""],
    description: "",
    usage: [""],
    botPermission: ["MANAGE_CHANNELS"],
    authorPermission: [""],
    cooldowns: [5],
    ownerOnly: false,
    run: async (client, interaction, args, config) => {
        try {
            const Delembed = new Discord.MessageEmbed()
            .setColor(`#d5d5d5`)
            .setDescription(`__**The Ticket will be deleted in \`5\` seconds**__`);
            
          if (interaction.replied) {
            return;
          }
          
          interaction.reply({ embeds: [Delembed] }).then(timeembed => {
            const channel = interaction.channel;
            
            if (channel && channel.permissionsFor(channel.guild.me).has('MANAGE_CHANNELS')) {
                setTimeout(() => {
                    if (channel) {
                        channel.delete().catch(async (error) => { return; })
                    }
                }, 5000);
                
            } else {
              console.log('Unable to delete channel. Missing permissions or channel not available.');
            }
          })
        } catch (error) {
            return;
        }
    }
}