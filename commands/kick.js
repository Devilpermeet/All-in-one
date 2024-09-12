module.exports = {
    name: 'kick',
    description: 'Kick a member from the server.',
    async execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('You do not have permission to use this command.');

        const member = message.mentions.members.first();
        if (member) {
            try {
                await member.kick();
                message.channel.send(`${member.user.tag} has been kicked.`);
            } catch (err) {
                message.channel.send('I was unable to kick the member.');
                console.error(err);
            }
        } else {
            message.reply('Please mention a valid member.');
        }
    },
};
