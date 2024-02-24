const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client16) => {
    fs.readdirSync('./Bots/Scammer/commands16').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Scammer/commands16/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Scammer/commands16/${folder}/${file}`);
            if(commands.name) {
                client16.commands.set(commands.name, commands);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}