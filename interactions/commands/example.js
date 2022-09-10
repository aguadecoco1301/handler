const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("example")
    .setDescription("A simple hello world script"),
    run: (client, interaction) => {
        interaction.reply("Hello world!")
    }
}