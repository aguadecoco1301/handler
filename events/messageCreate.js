module.exports = {
name: "messageCreate",
run: (app, message) => {
	if(message.author.bot) return
	let guild = message.guildId.toString()

	let prefix
	if(app.database.has(guild)) {
		prefix = app.database.get(guild).prefix
	} else prefix = app.config.prefix
	let args = message.content.slice(prefix.length).trim().split(" ")
	let cmd = args.shift()?.toLowerCase()

	let commands = app.commands.get(cmd)
	let config = app.commands._config.get(cmd)

	if(!message.content.startsWith(prefix)) return

	if(!commands) return app.reply(message, {
		es: "No se ha encontrado el comando",
		en: "Command not found"
	})

	if(config.permissions) {
		if(!message.member.permissions.has(config.permissions)) {
			return app.reply(message, {
				es: "No tienes permisos para ejecutar este comando",
				en: "You don't have permissions to run this command"
			})
		}
	}
	commands.run(app, message, args)
}
}
