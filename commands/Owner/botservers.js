const { MessageEmbed } = require("discord.js");
const { Database } = require("st.db")
const db = new Database("/database.json")
module.exports = {
  name: "servers",
  aliases: [""],
  description: "Show all server the bot are in",
  usage: [],
  botPermission: [],
  authorPermission: [""],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {
    let guilds = '';
    client.guilds.cache.forEach((guild) => {
      const duration = new Date() - guild.joinedAt;
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      guilds += `**${guild.name}** (**ID:** \`${guild.id}\`): (**Joined** \`${days}\`***d*** \`${hours}\`***h*** **ago**)\n`;
    });
    const embed = new MessageEmbed()
      .setTitle("All server the bot are in")
      .addFields(
        { name: "BotMaker Tier 1", value: guilds, inline: false },
      )
      .setColor(message.guild.me.displayHexColor);

    message.channel.send({ embeds: [embed] })
  },
};