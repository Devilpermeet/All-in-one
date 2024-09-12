module.exports = {
    name: 'help',
    description: 'List all available commands or provide information on a specific command.',
    execute(message, args) {
        const { commands } = message.client;
        if (!args.length) {
            // List all commands
            const commandList = commands.map(cmd => `\`${cmd.name}\`: ${cmd.description}`).join('\n');
            message.channel.send(`**Commands:**\n${commandList}`);
        } else {
            // Provide information on a specific command
            const commandName = args[0].toLowerCase();
            const command = commands.get(commandName);

            if (command) {
                message.channel.send(`**${command.name}**: ${command.description}`);
            } else {
                message.channel.send('That command does not exist.');
            }
        }
    },
};
