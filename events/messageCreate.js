module.exports = {
name: "messageCreate",
run: (app, message) => {
	if(message.author.bot) return
	if(!message.content.startsWith(prefix)) return
	let guild = message.guildId.toString()
	let prefix = app.get(guild).prefix

	let args = message.content.slice(prefix.length).trim().split(" ")
	let cmd = args.first().toLowerCase()

	let commands = app.commands.get(cmd)
	let config = app.commands._config.get(cmd)
	let alias = app.commands.alias.get(cmd)

	var command
	if(commands) {
		command = commands
	}
	else if(alias) {
		command = alias
	}
	else {
		message.reply(app.lang({
			en: "Command not found",
			es: "Comando no encontrado"
		}, message))
		return
	}

	if(config.permissions) {
		if(!message.member.permissions.has(config.permissions) {
			message.reply(app.lang({
				en: "You don't have permissions to run this command",
				es: "No tienes permisos para ejecutar este comando"
			}, message))
			return
		}
	}
	command.run(app, message, args)
}
}
