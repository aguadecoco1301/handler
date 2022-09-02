//Hello! You can copy and paste this folder to
//fast create a command
exports.run = (app, message, args) => {
	message.reply(app.lang({
		en: "Hello world",
		es: "Hola mundo",
	}))
}
