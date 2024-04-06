const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche des informations sur l\'utilisateur ou le serveur.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Affiche des informations sur l\'utilisateur.')
                .addUserOption(option =>
                    option.setName('utilisateur')
                        .setDescription('L\'utilisateur dont vous voulez afficher les informations.')
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Affiche des informations sur le serveur.')
        ),
    async execute(interaction) {
        try {
            const subCommand = interaction.options.getSubcommand();

            if (subCommand === 'user') {
                const userOption = interaction.options.getUser('utilisateur') || interaction.user;
                const member = interaction.guild.members.cache.get(userOption.id);
                const joinDate = member.joinedAt;
                const formattedJoinDate = `${joinDate.toLocaleDateString()} à ${joinDate.toLocaleTimeString()}`;

                await interaction.reply(`Nom de l'utilisateur : ${userOption.username}\nDate et heure d'arrivée sur le serveur : ${formattedJoinDate}`);
            } else if (subCommand === 'server') {
                const guild = interaction.guild;
                const memberCount = guild.memberCount;

                await interaction.reply(`Nom du serveur : ${guild.name}\nNombre de membres : ${memberCount}`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de l\'exécution de la commande.');
        }
    },
};
