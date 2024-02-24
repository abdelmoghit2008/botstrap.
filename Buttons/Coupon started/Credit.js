const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")
const { Probot } = require("discord-probot-transfer");
const checkdb = new Database("/Json-db/Others/BuyerChecker");
const db3 = new Database("/Json-db/Others/Bots-Price.json");
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
    name: "Redeem_Credits_CouponButton",
    aliases: ["", ""],
    description: "",
    usage: [""],
    botPermission: [""],
    authorPermission: [""],
    cooldowns: [],
    ownerOnly: false,
    run: async (client, interaction, args, config) => {
        try {
            const ownerID = BOTMAKETDB.get(`trID_${interaction.guild.id}`)//TheOwner
            const probotid = BOTMAKETDB.get(`probotID_${interaction.guild.id}`)//probotID
            if (!ownerID) return interaction.reply(`**لا يمكنك الشراء بسبب عدم تحديد الاونر**`)
            if (!probotid) return interaction.reply(`**لا يمكنك الشراء بسبب عدم تحديد ايدي برو بوت**`)

            const model = new Modal()
            .setCustomId(`Coupon_Credits`)//تعديل
            .setTitle("Use Coupon Code!");
          const Code = new TextInputComponent()
            .setCustomId("Credits_Redeem")
            .setRequired(true)
            .setLabel("Your Coupon")
            .setPlaceholder(`Type your coupon code here!`)
            .setStyle("SHORT");
          const The = new MessageActionRow().addComponents( Code );
          model.addComponents(The);
          await interaction.showModal(model);
        } catch (error) {
            console.log(error)
        }
    }
}