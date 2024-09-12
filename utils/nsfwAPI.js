const axios = require('axios');

module.exports = {
    async getNSFWContent() {
        try {
            const response = await axios.get('https://nekos.life/api/v2/img/lewd');
            return response.data.url;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching NSFW content');
        }
    },
};
