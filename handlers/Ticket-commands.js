const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client6) => {
    fs.readdirSync('./Bots/Ticket/commands6').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Ticket/commands6/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Ticket/commands6/${folder}/${file}`);
            if(commands.name) {
                client6.Ticketcommands.set(commands.name, commands);
                table.addRow(chalk.green(file), chalk.green('✔'));
            }else{
                table.addRow(chalk.red(file), chalk.red('❌'));
                continue;
            }
        }
    });
}