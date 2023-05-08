const discord = require("discord.js")
module.exports = {
    data: new discord.SlashCommandBuilder()
          .setName("test")
          .setDescription("asd"),
    code: async(client, interaction) => {
        let button = new discord.ActionRowBuilder().addComponents(
            new discord.ButtonBuilder()
            .setCustomId(path.join(__dirname, "buttons", "test.js"))
            .setLabel("¡Tócame!")
            .setStyle(discord.ButtonStyle.Primary)
        )
        let response = await interaction.reply({ 
            content:"A ver si sos un capo...",
            components: [button]
        })

        const collectorFilter = i => i.user.id === interaction.user.id;
        try {
	        const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 10000 });
            execute(confirmation.customId, client, interaction)
        } catch (e) {
	        await interaction.editReply({ content: 'No me tocaste :c', components: [] });
        }
    }
}
