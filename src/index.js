const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const { glob } = require('glob');
const { join } = require('path');
const { console } = require('sneaks');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel, Partials.Message, Partials.GuildMember, Partials.User],
    rest: {
        offset: 0,
    },
    ws: {
        large_threshold: 250,
    },
    allowedMentions: {
        parse: ['everyone', 'roles', 'users'],
    },
});

/** @type {Collection<string, any>} */
client.commands = new Collection();

async function registerCommands() {
    const commandFiles = await glob('**/*.{js, mjs, cjs}', {
        cwd: join(__dirname, 'commands'),
    });
    if (!commandFiles) {
        console.error('Komutlar klasörü boş.');
        return;
    }

    for await (const commandFile of commandFiles) {
        const path = `./commands/${commandFile}`;
        const command = require(path);

        if (!('data' in command)) continue;

        client.commands.set(command.data.name, command);
        console.info(`${command.data.name} adlı komut başarıyla yüklendi.`);
    }
}

async function registerEvents() {
    const eventFiles = await glob('*.{js, mjs, cjs}', {
        cwd: join(__dirname, 'events'),
    });
    if (!eventFiles) {
        console.error('Etkinlikler klasörü boş.');
        return;
    }

    for await (const eventFile of eventFiles) {
        const path = `./events/${eventFile}`;
        const event = require(path);

        client.on(event.category ?? event.name, (...args) => event.run(...args));
        console.info(`${event.category} adlı etkinlik başarıyla yüklendi.`);
    }
}

registerCommands();
registerEvents();

client.login(process.env.TOKEN).catch((err) => console.error(err));