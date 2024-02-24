const config = require("../config.js");
const { Permissions, MessageEmbed } = require("discord.js");

module.exports.run = async (client, interaction) => {
  if (interaction.isCommand()) {
    const { commandName, options, user, guildId } = interaction;

    const command = await client.slashcommands.get(commandName) || await client.Guildcommands.get(commandName)
    if (!command) return;
    if (command.ownerOnly === true) {
      if (!config.owners.includes(interaction.user.id)) {
        return interaction.reply({ content: `❗ ***لا تستطيع استخدام هذا الامر***`, ephemeral: true });
      }
    }

    if (command.botPermission) {
      const missingPermissions = [];
      const botPermissions = interaction.guild.members.me.permissions;

      if (command.botPermission && Array.isArray(command.botPermission)) {
        command.botPermission.forEach((permission) => {
          if (!botPermissions.has(permission)) {
            missingPermissions.push(permission);
          }
        });
      }
      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ I don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    if (command.authorPermission) {
      const missingPermissions = [];
      const memberPermissions = interaction.member.permissions;

      command.authorPermission.forEach((permission) => {
        if (!memberPermissions.has(permission)) {
          missingPermissions.push(permission);
        }
      });

      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ You don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }


    try {
      if (command) {
        command.run(client, interaction);
      }
    } catch (error) {
      console.error(`Error executing command ${commandName}:`, error);
    }
  }
  //Button Hanlder
  else if (interaction.isButton()) {
    const button = await client.buttons.get(interaction.customId);
    if (!button) return;
    if (button.ownerOnly === true) {
      if (!config.owners.includes(user.id)) {
        return interaction.reply({ content: `❗ ***لا تستطيع استخدام هذا الزر***`, ephemeral: true });
      }
    }

    if (button.botPermission) {
      const missingPermissions = [];
      const botPermissions = interaction.guild.me.permissions;

      if (button.botPermission && Array.isArray(button.botPermission)) {
        button.botPermission.forEach((permission) => {
          if (!botPermissions.has(permission)) {
            missingPermissions.push(permission);
          }
        });
      }
      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ I don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    if (button.authorPermission) {
      const missingPermissions = [];
      const memberPermissions = interaction.member.permissions;

      button.authorPermission.forEach((permission) => {
        if (!memberPermissions.has(permission)) {
          missingPermissions.push(permission);
        }
      });

      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ You don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    try {
      if (button) {
        button.run(client, interaction);
      }
    } catch (error) {
      console.error(`Error executing button ${customId}:`, error);
    }
  }
  //SelectMenu Handler
  else if (interaction.isSelectMenu()) {
    const selectMenu = await client.selectMenus.get(interaction.customId);
    if (!selectMenu) return;

    if (selectMenu.ownerOnly === true) {
      if (!config.owners.includes(user.id)) {
        return interaction.reply({ content: `❗ ***لا تستطيع استخدام هذا القائمة***`, ephemeral: true });
      }
    }

    if (selectMenu.botPermission) {
      const missingPermissions = [];
      const botPermissions = interaction.guild.me.permissions;

      if (selectMenu.botPermission && Array.isArray(selectMenu.botPermission)) {
        selectMenu.botPermission.forEach((permission) => {
          if (!botPermissions.has(permission)) {
            missingPermissions.push(permission);
          }
        });
      }
      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ I don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    if (selectMenu.authorPermission) {
      const missingPermissions = [];
      const memberPermissions = interaction.member.permissions;

      selectMenu.authorPermission.forEach((permission) => {
        if (!memberPermissions.has(permission)) {
          missingPermissions.push(permission);
        }
      });

      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ You don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    try {
      if (selectMenu) {
        selectMenu.run(client, interaction);
      }
    } catch (error) {
      console.error(`Error executing select menu ${customId}:`, error);
    }
  }
  //Modal
  else if (interaction.isModalSubmit()) {
    const selectMenu = await client.modlas.get(interaction.customId);
    if (!selectMenu) return;

    if (selectMenu.ownerOnly === true) {
      if (!config.owners.includes(user.id)) {
        return interaction.reply({ content: `❗ ***لا تستطيع استخدام هذا القائمة***`, ephemeral: true });
      }
    }

    if (selectMenu.botPermission) {
      const missingPermissions = [];
      const botPermissions = interaction.guild.me.permissions;

      if (selectMenu.botPermission && Array.isArray(selectMenu.botPermission)) {
        selectMenu.botPermission.forEach((permission) => {
          if (!botPermissions.has(permission)) {
            missingPermissions.push(permission);
          }
        });
      }
      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ I don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    if (selectMenu.authorPermission) {
      const missingPermissions = [];
      const memberPermissions = interaction.member.permissions;

      selectMenu.authorPermission.forEach((permission) => {
        if (!memberPermissions.has(permission)) {
          missingPermissions.push(permission);
        }
      });

      if (missingPermissions.length) {
        const missingPermsEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`❌ You don't have the required permissions: ${missingPermissions.join(", ")}`);

        return interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
      }
    }

    try {
      if (selectMenu) {
        selectMenu.run(client, interaction);
      }
    } catch (error) {
      console.error(`Error executing select menu ${customId}:`, error);
    }
  }
  else{
    return;
  }

}
