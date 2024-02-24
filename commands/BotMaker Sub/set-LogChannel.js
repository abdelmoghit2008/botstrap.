const Discord = require ('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal,TextInputComponent  } = require("discord.js");
const { Database } = require("st.db")
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
  name: "set-selllog",
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
        let logchannel = args[0]

        logchannel = message.mentions.channels.first() ||await message.guild.channels.cache.get(logchannel)
        
        if (!logchannel || logchannel.type !== 'GUILD_TEXT') return message.reply(`قم بتحديد روم اللوق للعمليات النكتمله`)

        if(!logchannel) return message.reply(`قم بتحديد روم اللوق للعمليات النكتمله`)
    
        message.reply(`روم الوق للشراء${logchannel}`)
        BOTMAKETDB.set(`SellsLog_${message.guild.id}`,logchannel.id)
    } catch (err) {
        console.error(err);
      message.reply("An error occurred while executing this command.");
    }
}}
