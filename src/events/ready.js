const { console } = require('sneaks');

module.exports = {
    category: 'ready',
    /**
     * @param {import("discord.js").Client} client
     */
    async run(client) {
        await client.application.commands.set(
            client.commands.map((command) => command.data),
        );

        console.success('Bot başarıyla Discord\'a bağlandı.');
    },
};
