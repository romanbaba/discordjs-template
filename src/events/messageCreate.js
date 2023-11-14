module.exports = {
    category: 'messageCreate',
    /**
     * @param {import("discord.js").Message} message
     */
    async run(message) {
        const prefix = process.env.PREFIX ?? '!';
        if (!message.content.startsWith(prefix) || message.author.bot) return;

       const commandInput = message.content.toLocaleLowerCase().split(' ')[0].slice(prefix.length);
       const command = message.client.commands.get(commandInput);

       if (!command) return;
       if (!message.guild) return;

       await command.messageRun(message);
    },
};
