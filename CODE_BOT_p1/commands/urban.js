const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un terme dans Urban Dictionary.')
        .addStringOption(option =>
            option.setName('terme')
                .setDescription('Le terme à rechercher.')
                .setRequired(true)
        ),
    async execute(interaction) {
        try {
            const searchTerm = interaction.options.getString('terme');

            const response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(searchTerm)}`);
            const data = response.data;

            if (data.list && data.list.length > 0) {
                const firstResult = data.list[0];
                await interaction.reply(`**Terme :** ${firstResult.word}\n**Définition :** ${firstResult.definition}`);
            } else {
                await interaction.reply('Aucune définition trouvée pour ce terme.');
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la recherche dans Urban Dictionary.');
        }
    },
};
