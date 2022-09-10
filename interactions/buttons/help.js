const { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = async(client, interaction) => {
    await interaction.update({
        content: "Thanks!",
        embeds: [],
        components: []
    })
}