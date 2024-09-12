const axios = require('axios');

module.exports = {
    name: 'nsfw',
    description: 'Fetch NSFW content.',
    async execute(message) {
        if (!message.channel.nsfw) return message.reply('This command can only be used in NSFW channels.');

        try {
            const response = await axios.get('https://nekos.life/api/v2/img/lewd');
            const nsfwImage = response.data.url;
            message.channel.send(nsfwImage);
        } catch (error) {
            console.error(error);
            message.reply('There was an error trying to fetch NSFW content.');
        }
    },
};
