const Discord = require ('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal,TextInputComponent  } = require("discord.js");
const { Database } = require("st.db")
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
  name: "set-clientrole",
  aliases: ["",""],
  description: "", 
  usage: [""], 
  botPermission: [""], 
  authorPermission: ["ADMINISTRATOR"], 
  cooldowns: [], 
  ownerOnly: false,
  run: async (client, message, args, config) => {
    try {
        const ownerID = BOTMAKETDB.get(`trID_${message.guild.id}`)
        if(!message.author.id === ownerID &&!message.author.id === `807814162234867734` ) return message.reply(`انت لست مالك البوت`)
        let clientrole = args[0]
        clientrole = message.mentions.roles.first() ||
        await message.guild.roles.cache.get(clientrole);
        if(!clientrole) return message.reply(`قم بتحديد ايدي رتبه العميل`)
    
        message.reply(`تم تحديد رتبه العميل الجديد ${clientrole}`)
        BOTMAKETDB.set(`ClientRole_${message.guild.id}`,clientrole.id)
    } catch (err) {
        console.error(err);
      message.reply("An error occurred while executing this command.");
    }
}}
