module.exports = {
    noPrefixCommands: ['play', 'nsfw'], // List commands that should work without prefix

    async handleNoPrefixCommand(message, args, client) {
        const { noPrefixCommands } = this;

        const command = args[0].toLowerCase();
        if (noPrefixCommands.includes(command)) {
            const isOwner = message.author.id === client.ownerId;
            const isAdmin = message.member && message.member.roles.cache.has(client.adminRoleId);

            if (isOwner || isAdmin) {
                if (client.commands.has(command)) {
                    try {
                        await client.commands.get(command).execute(message, args.slice(1));
                    } catch (error) {
                        console.error(error);
                        message.reply('There was an error trying to execute that command!');
