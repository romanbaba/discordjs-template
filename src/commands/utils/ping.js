const { SlashCommandBuilder } = require('discord.js');
const { createEmbed } = require('utilscord');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Bot\'un websocket gecikmesini ölçebilirsiniz.'),
	/** @param {import("discord.js").ChatInputCommandInteraction} interaction */
	async chatInput(interaction) {
        this.sendPing(interaction);
	},
	/** @param {import("discord.js").Message} message */
	async messageRun(message) {
		this.sendPing(message);
	},
    /** @param {import("discord.js").ChatInputCommandInteraction | import("discord.js").Message} type */
    async sendPing(type) {
        const embedBuilder = () => createEmbed(type.user ?? type.author);

        await type.reply({
            embeds: [
                embedBuilder()
                    .setTitle('✅ Gecikme değeri ölçüldü')
                    .setDescription(`> Anlık olarak gecikme değerim **${type.client.ws.ping} milisaniye** hızında.`),
            ],
        });
    },
};