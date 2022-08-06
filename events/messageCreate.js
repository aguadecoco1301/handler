module.exports = {
	name: "messageCreate",
	run: (app, message) => {
		if(message.author.bot) return
		let prefix = "."
		let args = message.content.slice(prefix.length).trim().split(" ")
		let cmd = args.shift()?.toLowerCase()

		let commands = app.commands.get(cmd)
		if(!message.content.startsWith(prefix)) return
		if(!commands) return app.reply(message, {
			es: "No se ha encontrado el comando",
			en: "Command not found"
		})
		commands(app, message, args)
	}
}
