const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Affiche le nom du serveur et son nombre de membres.'),
    async execute(interaction) {
        try {
            const guild = interaction.guild;
            
            const memberCount = guild.memberCount;
            
            await interaction.reply(`Nom du serveur : ${guild.name}\nNombre de membres : ${memberCount}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de l\'exécution de la commande.');
        }
    },
};
