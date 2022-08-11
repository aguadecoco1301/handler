exports.run = (app, message, args) => {
	const embed = new app.libs.discord.EmbedBuilder()
	.setColor(0xFF0000)
	.setTitle(app.lang({
		en: "Help",
		es: "Ayuda"
	}))
	app.commands.map(cmd => {
		embed.addField(cmd.name, app.lang({
			en: cmd.description.en,
			es: cmd.description.es
		}))
	})
	message.reply({embeds: [embed]})
}
