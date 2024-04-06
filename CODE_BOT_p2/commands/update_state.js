const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update-state')
        .setDescription('Mettre à jour l\'état d\'un élément dans la watchlist d\'un utilisateur')
        .addStringOption(option =>
            option.setName('email')
                .setDescription('L\'adresse email de l\'utilisateur')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('title')
                .setDescription('Le titre de l\'élément à mettre à jour')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('state')
                .setDescription('Le nouvel état de l\'élément')
                .setRequired(true)),
    async execute(interaction) {
        const email = interaction.options.getString('email');
        const title = interaction.options.getString('title');
        const state = interaction.options.getString('state');

        //const encodedEmail = encodeURIComponent(email);
        const url = `http://localhost:3000/user/update_state`;

        const options = {
            method: 'PUT',
            url: url,
            params: { email: email },
            data: { title, state }
        };
console.log(JSON.stringify(options))
        try {
            const response = await axios.request(options);
            await interaction.reply(`L'état de l'élément "${title}" a été mis à jour avec succès.`);
        } catch (e) {
           // console.log(e);
            await interaction.reply('Une erreur s\'est produite lors de la mise à jour de l\'état de l\'élément.');
        }
    },
};
