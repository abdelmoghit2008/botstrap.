const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (clien12) => {
    fs.readdirSync('./Bots/Shop/commands12').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Shop/commands12/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Shop/commands12/${folder}/${file}`);
            if(commands.name) {
                clien12.Shopcommands.set(commands.name, commands);
                table.addRow(chalk.green(file), chalk.green('✔'));
            }else{
                table.addRow(chalk.red(file), chalk.red('❌'));
                continue;
            }
        }
    });
}