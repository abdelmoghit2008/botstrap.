const Discord = require ('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal,TextInputComponent  } = require("discord.js");
const { Database } = require("st.db")
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
  name: "set-probotid",
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
    let ProbotID = args[0]
    if(!ProbotID) return message.reply(`قم بتحديد ايدي برو بوت الجديد`)
    if(isNaN(ProbotID)) return message.reply(`قم بتحديد ايدي برو بوت الجديد`)

    try {
      const user = await client.users.fetch(ProbotID);
      if(user.bot) {
        message.reply(`تم تحديد اي برو بوت الجديد ${ProbotID}`)
        BOTMAKETDB.set(`probotID_${message.guild.id}`,ProbotID)
      }
    } catch (error) {
      message.reply(`قم بتحديد ايدي برو بوت الجديد`)
    }
}}