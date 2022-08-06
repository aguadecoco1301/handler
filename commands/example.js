module.exports = {
	name: "example",
	description: {
		en: "A simple hello world",
		es: "Un simple hola mundo"
	},
	run: (app, message, args) => {
		const readdir = app.libs.fs.readdirSync()
		message.replyLang = (...lang) => {
			switch(language(message.guildId)) {
				case "es":
					message.reply(lang.es)
					break
				case "en":
					message.reply(lang.en)
				default:
					throw app.error("No se ha encontrado el idioma " + lang)
					break
			}


		message.replyLang({
			es: "Sexo",
			en: "Sex"
		})
	}
}
