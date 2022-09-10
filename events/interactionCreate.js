module.exports = {
	name: "interactionCreate",
	run: async(client, interaction) => {
		try {
			if(interaction.isChatInputCommand()) {
				let command = client.commands.get(interaction.commandName)
				if(!command) return
				await command.run(client, interaction)
			}
			if(interaction.isButton()) {
				let button = require(`../interactions/buttons/${interaction.customId}`)
				if(!button) return
				await button(client, interaction)
			}
			if(interaction.isModalSubmit()) {
				console.log(interaction)
				let modal = require(`../interactions/modals/${interaction.customId}`)
				if(!modal) return
				await modal(client, interaction)
			}
		} catch(error) {
			console.error(error);
		}
	}
}