const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Shop', 'Commands Status💹')

module.exports = (client6) => {
    fs.readdirSync('./Bots/Ticket/Ticket-Selectmenu').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Ticket/Ticket-Selectmenu/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let TickerSelectmenu = require(`../Bots/Ticket/Ticket-Selectmenu/${folder}/${file}`);
            if(TickerSelectmenu.name) {
                client6.TickerSelectmenu.set(TickerSelectmenu.name, TickerSelectmenu);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}