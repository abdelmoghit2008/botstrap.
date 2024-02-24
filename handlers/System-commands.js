const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client7) => {
    fs.readdirSync('./Bots/System/commands7').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/System/commands7/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/System/commands7/${folder}/${file}`);
            if(commands.name) {
                client7.commands.set(commands.name, commands);
                table.addRow(file, chalk.green('✔'));
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}