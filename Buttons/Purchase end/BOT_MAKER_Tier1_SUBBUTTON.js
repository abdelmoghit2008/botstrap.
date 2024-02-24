const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")
const { Probot } = require("discord-probot-transfer");
const checkdb = new Database("/Json-db/Others/BuyerChecker");
const db3 = new Database("/Json-db/Others/Bots-Price.json");
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
    name: "BOT_MAKER_Tier1_SUBBUTTON",
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
            .setCustomId(`BOTMAKERSUB_Tier1_MODAL`)//تعديل
            .setTitle("Subscribe to BotMaker Tier 1");//تعديل
          const Server_ID = new TextInputComponent()
            .setCustomId("Server_ID")
            .setRequired(true)
            .setMaxLength(21)
            .setMinLength(18)
            .setLabel("Your server id")
            .setPlaceholder(`The ID of your discord server`)
            .setStyle("SHORT");
          const The_ID = new MessageActionRow().addComponents(
            Server_ID
          );
          model.addComponents(The_ID);
          await interaction.showModal(model);
        } catch (error) {
            console.log(error)
        }
    }
}