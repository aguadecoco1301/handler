//Config command, don't delete
exports.run = (app, message, args) => {
	let guild = message.guildId.toString()
	let data = app.database.get(guild) || app.config

	const embed = new app.libs.discord.EmbedBuilder()
	.setColor(0xFF0000)
	.setTitle("Config")
	if(!args[1]) {
		embed.addFields(
		{
			name: "Prefix:",
			value: data.prefix,
			inline: true
		},
		{
			name: "Language:",
			value: data.lang,
			inline: true
		})
		return message.reply({embeds:[embed]})
	}

	let menu = args[0].toLowerCase()
	let content = args.split(1).join(" ")
	if(menu === "prefix") {
		app.database.set(guild, {
			prefix: content,
			lang: data.lang
		})
		embed.setDescription(`Prefix: ${content}`)
	}

	if(menu === "language") {
		app.database.set(guild, {
			prefix: data.prefix,
			lang: content
		})
		embed.setDescription(`Lang: ${content}`)
	}
	message.reply({embeds:[embed]})
}
