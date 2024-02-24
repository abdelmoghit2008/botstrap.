const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client3) => {
    fs.readdirSync('./Bots/Suggestion/commands3').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Suggestion/commands3/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Suggestion/commands3/${folder}/${file}`);
            if(commands.name) {
                client3.commands.set(commands.name, commands);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}