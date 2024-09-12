module.exports = {
    name: 'about',
    description: 'Get information about the bot.',
    execute(message) {
        const botInfo = `
**Bot Name**: MyBot
**Version**: 1.0.0
**Author**: YourName
**Description**: This bot provides various functionalities including moderation, music, and more.

Use \`${message.client.prefix}help\` to see all available commands.
        `;
        message.channel.send(botInfo);
    },
};
