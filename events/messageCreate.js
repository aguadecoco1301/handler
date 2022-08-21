module.exports = {
name: "messageCreate",
run: (app, message) => {
	if(message.author.bot) return
	globalThis._message = message // Send message to app.lang
	message.lang = app.lang
	let guild = message.guildId.toString()
	let prefix = app.get(guild).prefix

	if(!message.content.startsWith(prefix)) return
	let args = message.content.slice(prefix.length).trim().split(" ")
	let cmd = args.shift()?.toLowerCase()

	let commands = app.commands.get(cmd)
	let alias = app.commands.alias.get(cmd)
	if(commands) {
		var command = commands
		var config = app.commands._config.get(cmd)
	}
	else if(alias) {
		var command = alias
		var config = app.commands.alias._config.get(cmd)
	}
	else {
		message.reply(message.lang({
			en: "Command not found",
			es: "Comando no encontrado"
		}))
		return
	}

	if(config.permissions) {
		if(!message.member.permissions.has(config.permissions)) {
			message.reply(message.lang({
				en: "You don't have permissions to run this command",
				es: "No tienes permisos para ejecutar este comando"
			}))
			return
		}
	}
	command.run(app, message, args)
}
}
