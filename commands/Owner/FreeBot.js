const {
    Client,
    Collection,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    MessageSelectMenu,
    Intents,
    Modal,
    TextInputComponent
  } = require("discord.js");
  const { ChannelType } = require("discord-api-types/v9");
  const Discord = require('discord.js');
  const { SlashCommandBuilder } = require("@discordjs/builders")
  
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName(`free-bot`)
      .setDescription(`Make Bot for free`)
      .addStringOption(type => type
        .setName(`bot-type`)
        .setDescription(`Select the bot Type`)
        .addChoices(
          { name: `Autoline`, value: `BuyAutoLine` },
          { name: `Suggestion`, value: `BuySuggestion` },
          { name: `Auto-Tax`, value: `BuyTax` },
          { name: `Credit`, value: `BuyCredit` },
          { name: `Ticket`, value: `BuyTicket` },
          { name: `System`, value: `BuySystem` },
          { name: `Brodcast`, value: `BuyBrodcast` },
          { name: `Scammer-checker`, value: `BuyScammer` },
          { name: `Giveaway`, value: `BuyGiveaways` },
          { name: `ProBot`, value: `BuyProbot` },
          { name: `Logs`, value: `BuyLog` },
          { name: `FeedBack`, value: `BuyFeedback` },
          { name: `Shop`, value: `BuyShop` }
        )
        .setRequired(true)
        ),
    botPermission: [""],
    authorPermission: ["ADMINISTRATOR"],
    ownerOnly: false,
    async run(client, interaction) {
      try {
        if (!interaction.channel.name.startsWith(`ticket-`)) return interaction.reply(`هذا الامر فقط يستخدم في رومات التكت لانه يحذف الروم`)
        const Bot_Type = interaction.options.getString(`bot-type`)
        console.log(Bot_Type)
        FreeBotButton = new MessageActionRow().addComponents(//تعديل
        new MessageButton()
          .setCustomId(`${Bot_Type}`)//تعديل
          .setLabel(`FreeBot`)
          .setStyle("PRIMARY")
      )
        interaction.reply({components: [FreeBotButton]})
      } catch (error) {
        console.log(error)
        await interaction.reply(`حدث خطا`)
      }
    },
  };