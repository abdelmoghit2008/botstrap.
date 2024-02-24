const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client0) => {
    fs.readdirSync('./Modals').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Modals/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let Modals = require(`../Modals/${folder}/${file}`);
            if(Modals.name) {
                client0.modlas.set(Modals.name, Modals);
                table.addRow(file, '✔')
            }else{
                table.addRow(file,'❌')
                continue;
            }
        }
    });
}