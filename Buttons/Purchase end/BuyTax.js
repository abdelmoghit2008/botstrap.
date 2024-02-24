const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")
const { Probot } = require("discord-probot-transfer");
const checkdb = new Database("/Json-db/Others/BuyerChecker");
const db3 = new Database("/Json-db/Others/Bots-Price.json");
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
    name: "BuyTax",
    aliases: ["", ""],
    description: "",
    usage: [""],
    botPermission: [""],
    authorPermission: [""],
    cooldowns: [],
    ownerOnly: false,
    run: async (client, interaction, args, config) => {
        try {
            const model = new Modal()
            .setCustomId(`Tax_MODAL`)//تعديل
            .setTitle("Make Tax bot");//تعديل
          const Bot_Token = new TextInputComponent()
            .setCustomId("Bot_Token")
            .setRequired(true)
            .setMaxLength(75)
            .setMinLength(70)
            .setLabel("token")
            .setPlaceholder(`The Token`)
            .setStyle("SHORT");
          const Bot_prefix = new TextInputComponent()
            .setCustomId("Bot_prefix")
            .setRequired(true)
            .setMaxLength(3)
            .setMinLength(1)
            .setLabel(`bot prefix`)
            .setPlaceholder(`The Prefix`)
            .setStyle("SHORT");
          const The_Token = new MessageActionRow().addComponents(
            Bot_Token
          );
          const The_Prefix = new MessageActionRow().addComponents(
            Bot_prefix
          );
          model.addComponents(The_Token, The_Prefix);
          await interaction.showModal(model);
        } catch (error) {
            console.log(error)
        }
    }
}