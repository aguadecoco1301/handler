const discord = require("discord.js")
exports.run = (app, interaction, args) => {
	const embed = discord.EmbedBuilder()
	.setColor(0xFF0000)
	.setTitle("Help")
	app.commands._config.map(cmd => {
		embed.addFields({
			name: cmd.name,
			value: cmd.description
		})
	})

	interaction.reply({embeds: [embed]})
}
