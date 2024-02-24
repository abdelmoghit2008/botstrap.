const Discord = require('discord.js')
const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, Modal, TextInputComponent } = require("discord.js");
const { Database } = require("st.db")
const { Probot } = require("discord-probot-transfer");
const checkdb = new Database("/Json-db/Others/BuyerChecker");
const db3 = new Database("/Json-db/Others/Bots-Price.json");
const BOTMAKETDB = new Database("/Json-db/BotMaker/BOTMAKERDB");
const {CLIENTID} = require(`../../config.json`)
module.exports = {
    name: "Ticket_Continue",
    aliases: ["", ""],
    description: "",
    usage: [""],
    botPermission: [""],
    authorPermission: [""],
    cooldowns: [],
    ownerOnly: false,
    run: async (client, interaction, args, config) => {
        try {
            const TicketPrice = db3.get(`TicketP_${interaction.guild.id}`) || db3.get(`TicketP`) || 15000;
            const Tickettotalprice = Math.floor(TicketPrice * (20 / 19) + 1);
            const checkDB = checkdb.get(`${interaction.channel.id}`)

            const ownerID = BOTMAKETDB.get(`trID_${interaction.guild.id}`)//TheOwner
            const probotid = BOTMAKETDB.get(`probotID_${interaction.guild.id}`)//probotID
            if (!ownerID) return interaction.reply(`**لا يمكنك الشراء بسبب عدم تحديد الاونر**`)
            if (!probotid) return interaction.reply(`**لا يمكنك الشراء بسبب عدم تحديد ايدي برو بوت**`)

            if (checkDB) return interaction.reply({ content: `لا يمكنك الضغط علي الزر مره اخري قبل انتهاء الوقت`, ephemeral: true })
            checkdb.set(`${interaction.channel.id}`, `true`)
            client.probot = Probot(client, {
                fetchGuilds: true,
                data: [

                    {
                        fetchMembers: true,
                        guildId: interaction.guild.id,
                        probotId: probotid,
                        owners: ownerID,
                    },
                ],
            });
            await interaction.reply(
                `__***.قم بكتابه امر التحويل التالي***__
                - **لديك 5 دقايق حتي تقوم بتحويل المبلغ**
                \`\`\`/credits ${ownerID} ${Tickettotalprice}\`\`\``//تعديل
            )


            var check = await client.probot.collect(interaction, {
                probotId: probotid,
                owners: ownerID,
                time: 1000 * 60 * 5,
                userId: interaction.user.id,
                price: Tickettotalprice,
                fullPrice: false,
            });
            if (check.status) {
                let Ticket_BUTTON = new MessageActionRow().addComponents(//تعديل
                    new MessageButton()
                        .setCustomId(`BuyTicket`)//تعديل
                        .setLabel("Ticket")
                        .setStyle("PRIMARY")
                );
                interaction.channel.send({ components: [Ticket_BUTTON] }).then(() => {
                    checkdb.delete(`${interaction.channel.id}`);
                })
            } else if (check.error) {
                return interaction.channel.send(`[x] الوقت قد انتهي`).catch(err =>{})
            } else {
                return interaction.channel.send(`**❌ اعد المحاوله.**`);
            }
        } catch (error) {
            
        }
    }
}