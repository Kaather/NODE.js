const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Affiche le nom de l\'utilisateur et sa date et heure d\'arrivée sur le serveur.'),
    async execute(interaction) {
        try {
            const user = interaction.user;

            const member = interaction.guild.members.cache.get(user.id);
            const joinDate = member.joinedAt;

            const formattedJoinDate = `${joinDate.toLocaleDateString()} à ${joinDate.toLocaleTimeString()}`;

            await interaction.reply(`Nom de l'utilisateur : ${user.username}\nDate et heure d'arrivée sur le serveur : ${formattedJoinDate}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de l\'exécution de la commande.');
        }
    },
};
