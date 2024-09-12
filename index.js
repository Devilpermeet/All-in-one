const { Client, Intents } = require('discord.js');
const { token, prefix, ownerId, adminRoleId } = require('./config.json');
const fs = require('fs');
const path = require('path');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS] });

// Load commands
client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
fs.readdirSync(commandsPath).forEach(file => {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
});

// Load events
const eventsPath = path.join(__dirname, 'events');
fs.readdirSync(eventsPath).forEach(file => {
    const event = require(path.join(eventsPath, file));
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
});

client.prefix = prefix;
client.ownerId = ownerId;
client.adminRoleId = adminRoleId;

client.login(token);
