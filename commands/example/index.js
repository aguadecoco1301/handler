//Hello! You can copy and paste this folder to
//create a command fast
module.exports = (app, message, args) => {
	app.reply(message, {
		es: "Hola mundo",
		en: "Hello world"
	})
}
