//Config command, don't delete
exports.run = (app, message, args) => {
	let guild = message.guildId.toString()
	let dataValue = app.database.get(guild) || app.config

	const embed = new app.libs.discord.EmbedBuilder()
	.setColor(0xFF0000)
	.setTitle("Config")

	if(!args[1]) {
		embed.addFields(
		{
			name: "Prefix:",
			value: dataValue.prefix,
			inline: true
		},
		{
			name: "Language:",
			value: dataValue.lang,
			inline: true
		})
		return message.reply({embeds:[embed]})
	}

	let menu = args[0].toLowerCase()
	let content = args[1]
	if(menu === "prefix") {
		app.database.set(guild, {
			prefix: content,
			lang: dataValue.lang
		})
		embed.setDescription(`Prefix: ${content}`)
	}
	if(menu === "language") {
		app.database.set(guild, {
			prefix: dataValue.prefix,
			lang: content
		})
		embed.setDescription(`Lang: ${content}`)
	}
	message.reply({embeds:[embed]})
}
