module.exports = async(client, interaction) => {
    await interaction.update({
        content: "Thanks!",
        embeds: [],
        components: []
    })
}
