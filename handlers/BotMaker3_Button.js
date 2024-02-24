const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client0) => {
    fs.readdirSync('./Buttons').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Buttons/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let Buttons = require(`../Buttons/${folder}/${file}`);
            if(Buttons.name) {
                client0.buttons.set(Buttons.name, Buttons);
                table.addRow(file, '✔')
            }else{
                table.addRow(file,'❌')
                continue;
            }
        }
    });
}