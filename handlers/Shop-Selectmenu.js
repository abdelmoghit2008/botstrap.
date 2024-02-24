const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Shop', 'Commands Status💹')

module.exports = (client12) => {
    fs.readdirSync('./Bots/Shop/Shop-Selectmenu').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Shop/Shop-Selectmenu/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let ShopSelectmenu = require(`../Bots/Shop/Shop-Selectmenu/${folder}/${file}`);
            if(ShopSelectmenu.name) {
                client12.ShopSelectmenu.set(ShopSelectmenu.name, ShopSelectmenu);
                table.addRow(file, '✔');
            }else{
                table.addRow(file, '❌');
                continue;
            }
        }
    });
}