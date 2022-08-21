//Config command, don't delete
exports.run = (app, message, args) => {
	let guild = message.guildId.toString()
	let data = app.get(guild)

	const embed = new app.libs.discord.EmbedBuilder()
	.setColor(0xFF0000)
	if(!args[1]) {
		embed.setTitle(app.lang({
			en: "Configuration:",
			es: "Configuración:"
		}))
		embed.addFields(
		{
			name: app.lang({
				en: "Prefix:",
				es: "Prefijo:"
			}),
			value: data.prefix,
			inline: true
		},
		{
			name: app.lang({
				en: "Language:",
				es: "Idioma:"
			}),
			value: data.language,
			inline: true
		})
		message.reply({embeds: [embed]})
		return
	}

	let menu = args[0].toLowerCase()
	let content = args[1].toString()
	if(menu === "prefix" || menu === "prefijo") {
		app.database.set(guild, {
			prefix: content,
			language: data.language
		})
		embed.setDescription(app.lang({
			en: `Prefix: ${content}`,
			es: `Prefijo: ${content}`
		}))
	}

	if(menu === "language" || menu === "idioma") {
		if(!app.config.languages.find(f => f === content)) return message.reply(app.lang({
			en: `The language \`${content}\` doesn't exist.\n Try \`${app.config.languages.join(", ")}\``,
			es: `El lenguaje \`${content}\` no existe.\nIntenta con \`${app.config.languages.join(", ")}\``
		}))
		app.database.set(guild, {
			prefix: data.prefix,
			language: content
		})
		embed.setDescription(app.lang({
			en: `Language: ${content}`,
			es: `Idioma: ${content}`
		}))
	}
	embed.setTitle(app.lang({
		en: "Changed configuration:",
		es: "Configuración cambiada:"
	}))
	message.reply({embeds:[embed]})
}
