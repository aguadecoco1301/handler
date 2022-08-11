module.exports = {
name: "messageCreate",
run: (app, message) => {
	if(message.author.bot) return
	let guild = message.guildId.toString()
	let prefix = app.get(guild).prefix

	let args = message.content.slice(prefix.length).trim().split(" ")
	let cmd = args.shift()?.toLowerCase()

	let commands = app.commands.get(cmd)
	let config = app.commands._config.get(cmd)
	if(!message.content.startsWith(prefix)) return
	if(!commands) return message.reply(app.lang({
		es: "No se ha encontrado el comando",
		en: "Command not found"
	}, message))
	if(config.permissions) {
		if(!message.member.permissions.has(config.permissions)) {
			return message.reply(app.lang({
				es: "No tienes permisos para ejecutar este comando",
				en: "You don't have permissions to run this command"
			}, message))
		}
	}
	commands.run(app, message, args)
}
}
