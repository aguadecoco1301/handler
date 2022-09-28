const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Gives you help to fight your existential problems"),
    run: (client, interaction) => {
        const embed = new EmbedBuilder()
	    .setColor(0xFF0000)
	    .setTitle("Help")
	    client.commands.map(cmd => {
		    embed.addFields({
			    name: cmd.data.name,
			    value: cmd.data.description
		    })
	    })
		let button = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId("commands/help/buttons/help.js")
			.setLabel("You can help me?")
			.setStyle(ButtonStyle.Primary)
		)
	    interaction.reply({
			embeds: [embed],
			components: [button]
		})
    }
}
