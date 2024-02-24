const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client0) => {
    fs.readdirSync('./selectMenus').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./selectMenus/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let selectMenus = require(`../selectMenus/${folder}/${file}`);
            if(selectMenus.name) {
                client0.selectMenus.set(selectMenus.name, selectMenus);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}