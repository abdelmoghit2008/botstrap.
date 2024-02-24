const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")
const { Probot } = require("discord-probot-transfer");
const checkdb = new Database("/Json-db/Others/BuyerChecker");
const db3 = new Database("/Json-db/Others/Bots-Price.json");
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
    name: "BOT_MAKER_Tier2_SUBBUTTON",
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
                .setCustomId(`BOTMAKERSUB_Tier2_MODAL`)//تعديل
                .setTitle("Subscribe to BotMaker Tier 2");//تعديل
            const Bot_Token = new TextInputComponent()
                .setCustomId("Bot_Token")
                .setRequired(true)
                .setMaxLength(75)
                .setMinLength(70)
                .setLabel("token")
                .setPlaceholder(`The Token`)
                .setStyle("SHORT")
            const Bot_prefix = new TextInputComponent()
                .setCustomId("Bot_prefix")
                .setRequired(true)
                .setMaxLength(3)
                .setMinLength(1)
                .setLabel(`bot prefix`)
                .setPlaceholder(`The Prefix`)
                .setStyle("SHORT");
            const Server_ID = new TextInputComponent()
                .setCustomId("Server_ID")
                .setRequired(true)
                .setMaxLength(21)
                .setMinLength(18)
                .setLabel("Your server id")
                .setPlaceholder(`The ID of your discord server`)
                .setStyle("SHORT");
            const The_Token = new MessageActionRow().addComponents(
                Bot_Token
            );
            const The_Prefix = new MessageActionRow().addComponents(
                Bot_prefix
            );
            const The_ID = new MessageActionRow().addComponents(
                Server_ID
            );
            model.addComponents(The_ID,The_Token,The_Prefix);
            await interaction.showModal(model);
        } catch (error) {
            console.log(error)
        }
    }
}