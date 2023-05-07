const discord = require("discord.js")
module.exports = {
    data: new discord.SlashCommandBuilder()
          .setName("test")
          .setDescription("asd"),
    code: (client, interaction) => {
        interaction.reply("ME HICISTE FUNCIONAR CHABON, SOS UN CAPO")
    }
}
