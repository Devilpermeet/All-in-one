module.exports = {
    name: 'ping',
    description: 'Check the bot\'s latency.',
    async execute(message) {
        const sentMessage = await message.channel.send('Pinging...');
        const latency = sentMessage.createdTimestamp - message.createdTimestamp;
        sentMessage.edit(`Pong! Latency is ${latency}ms.`);
    },
};
