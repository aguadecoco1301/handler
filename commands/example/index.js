//Hello! You can copy and paste this folder to
//create a command fast
exports.run = (app, message, args) => {
	app.reply(message, {
		es: "Hola mundo",
		en: "Hello world"
	})
}
