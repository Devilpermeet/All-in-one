const { createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'Play a song from YouTube.',
    async execute(message, args) {
        if (!args.length) return message.reply('You need to provide a YouTube URL.');
        const url = args[0];

        if (!ytdl.validateURL(url)) return message.reply('Invalid URL.');

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('You need to join a voice channel first!');

        try {
            const connection = await voiceChannel.join();
            const stream = ytdl(url, { filter: 'audioonly' });
            const resource = createAudioResource(stream, { inputType: 'unknown' });
            const player = createAudioPlayer();

            connection.subscribe(player);
            player.play(resource);

            player.on(AudioPlayerStatus.Idle, () => voiceChannel.leave());
            player.on('error', error => {
                console.error(error);
                voiceChannel.leave();
            });

            message.reply(`Now playing: ${url}`);
        } catch (error) {
            console.error(error);
            message.reply('There was an error trying to play the song.');
        }
    },
};
