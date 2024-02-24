const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client2) => {
    fs.readdirSync('./Bots/Auto-line/commands2').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Auto-line/commands2/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Auto-line/commands2/${folder}/${file}`);
            if(commands.name) {
                client2.commands.set(commands.name, commands);
                table.addRow(chalk.green(file), chalk.green('✔'));
            }else{
                table.addRow(chalk.red(file), chalk.red('❌'));
                continue;
            }
        }
    });
}