module.exports = {
	name: "messageCreate",
	run: (app, message) => {
		if(message.author.bot) return
		app.reply(message, {
			es: "Hola",
			en: "Hi"
		})
	}
}
