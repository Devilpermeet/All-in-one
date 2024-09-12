module.exports = {
    name: 'guildMemberAdd',
    once: true,
    execute(member) {
        console.log(`New member joined: ${member.user.tag}`);
        // You can add more actions here if needed (e.g., send a welcome message)
    },
};
