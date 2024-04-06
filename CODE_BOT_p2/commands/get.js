const { SlashCommandBuilder } =  require('discord.js');
const  axios  =  require('axios');

module.exports  = {
    data:  new  SlashCommandBuilder()
        .setName('get-user')
        .setDescription('Réponse : Liste des utilisateurs de l api todolist'),
    async  execute(interaction) {
        const  options  = {
            method:  'GET',
            url:  'http://localhost:3000/user/get',
        };
        try {
            const  response  =  await  axios.request(options);
            let  items  =  response.data
            if (!Array.isArray(items)) {
                items  = [items]
            }
            const  reply  =  `Premier utilisateur de la liste : ${items.map(item => item.username).join(', ')}`;
            await  interaction.reply(reply);
        } catch (e) {
            console.log(e);
        }
    },
};