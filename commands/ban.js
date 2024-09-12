module.exports = {
    name: 'ban',
    description: 'Ban a member from the server.',
    async execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('You do not have permission to use this command.');

        const member = message.mentions.members.first();
        if (member) {
            try {
                await member.ban();
                message.channel.send(`${member.user.tag} has been banned.`);
            } catch (err) {
                message.channel.send('I was unable to ban the member.');
                console.error(err);
            }
        } else {
            message.reply('Please mention a valid member.');
        }
    },
};
