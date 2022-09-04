module.exports = {
name: "interactionCreate",
run: (client, interaction) => {
	console.log(interaction)
	let args = interaction.options

	let command = client.commands.get(interaction.commandName)
	console.log(command)
	if(!command) return

	command.run(client, interaction, args)
}
}
