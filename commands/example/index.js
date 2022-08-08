//Hello! You can copy and paste this folder to
//fast create a command
exports.run = (app, message, args) => {
	app.reply(message, {
		es: "Hola mundo",
		en: "Hello world"
	})
}
