const discord = require("discord.js")
module.exports = {
    data: new discord.SlashCommandBuilder()
          .setName("test")
          .setDescription("Command for test"),
    code: async(client, interaction) => {
        let button = new discord.ActionRowBuilder().addComponents(
            new discord.ButtonBuilder()
            .setCustomId(path.join(__dirname, "buttons", "test.js"))
            .setLabel("Touch me!")
            .setStyle(discord.ButtonStyle.Primary)
        )
        let response = await interaction.reply({ 
            content:"Touch me!",
            components: [button]
        })

        const collectorFilter = i => i.user.id === interaction.user.id;
        try {
	        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 10000 });
            execute(confirmation.customId, client, interaction)
        } catch (e) {
	        await interaction.editReply({ content: "You don't touched me", components: [] });
        }
    }
}
