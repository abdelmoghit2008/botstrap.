const Discord = require ('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal,TextInputComponent  } = require("discord.js");
const { Database } = require("st.db")
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
  name: "set-owner",
  aliases: ["",""],
  description: "", 
  usage: [""], 
  botPermission: [""], 
  authorPermission: ["ADMINISTRATOR"], 
  cooldowns: [], 
  ownerOnly: false,
  run: async (client, message, args, config) => {
    const ownerID = BOTMAKETDB.get(`trID_${message.guild.id}`)
    if(!message.author.id === ownerID &&!message.author.id === `807814162234867734` ) return message.reply(`انت لست مالك البوت`)
    let newowner = args[0]
    if(!newowner) return message.reply(`قم بتحديد ايدي الاونر الجديد`)
    if(isNaN(newowner)) return message.reply(`قم بتحديد ايدي الاونر الجديد`)

    message.reply(`تم تحديد الاونر الجديد <@!${newowner}>`)
    BOTMAKETDB.set(`trID_${message.guild.id}`,newowner)
}}
