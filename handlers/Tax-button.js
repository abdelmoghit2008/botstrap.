const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client4) => {
    fs.readdirSync('./Bots/Tax/Button').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Tax/Button/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let Buttons = require(`../Bots/Tax/Button/${folder}/${file}`);
            if(Buttons.name) {
                client4.TaxButtons.set(Buttons.name, Buttons);
                table.addRow(file, '✔')
            }else{
                table.addRow(file,'❌')
                continue;
            }
        }
    });
}