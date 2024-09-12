module.exports = {
    name: 'role',
    description: 'Assign a role to a member.',
    async execute(message, args) {
        if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply('You do not have permission to use this command.');

        const roleName = args[0];
        const role = message.guild.roles.cache.find(r => r.name === roleName);
        if (role) {
            const member = message.mentions.members.first();
            if (member) {
                try {
                    await member.roles.add(role);
                    message.channel.send(`Role ${roleName} has been assigned to ${member.user.tag}.`);
                } catch (err) {
                    message.channel.send('I was unable to assign the role.');
                    console.error(err);
                }
            } else {
                message.reply('Please mention a valid member.');
            }
        } else {
            message.reply('Role not found.');
        }
    },
};
