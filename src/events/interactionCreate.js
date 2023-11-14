const { console } = require('sneaks');

module.exports = {
    category: 'interactionCreate',
    /**
     * @param {import("discord.js").Interaction} interaction
     */
    async run(interaction) {
       if (!interaction.isChatInputCommand()) return;

       const command = interaction.client.commands.get(interaction.commandName);
       if (!command) {
            console.error(`${interaction.commandName} adlı komut bulunamadı.`);
            return;
       }

       await command.chatInput(interaction);
    },
};
