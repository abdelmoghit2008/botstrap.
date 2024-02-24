const fs = require('fs');
const chalk = require(`chalk`);
const ascii = require('ascii-table');
let table = new ascii(`commands`);
table.setHeading('Command', 'Commands Status💹')

module.exports = (client17) => {
    fs.readdirSync('./Bots/Brodcast/commands17').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./Bots/Brodcast/commands17/${folder}`).filter(file => file.endsWith('.js'));
        for(file of commandFiles) {
            let commands = require(`../Bots/Brodcast/commands17/${folder}/${file}`);
            if(commands.name) {
                client17.commands.set(commands.name, commands);
                table.addRow(chalk.green(file), chalk.green('✔'));
            }else{
                table.addRow(chalk.red(file), chalk.red('❌'));
                continue;
            }
        }
    });
}