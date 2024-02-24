const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client9) => {
    fs.readdirSync('./Bots/Giveaways/commands9').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Giveaways/commands9/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Giveaways/commands9/${folder}/${file}`);
            if(commands.name) {
                client9.commands.set(commands.name, commands);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}