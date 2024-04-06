const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Répète votre message.')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('Le texte à répéter.')
                .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString('text');
        await interaction.reply(text);
    },
};
