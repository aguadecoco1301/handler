module.exports = {
	name: "interactionCreate",
	run: async(client, interaction) => {
		try {
			if(interaction.isChatInputCommand()) {
				let command = client.commands.find(f => f.data.name == interaction.commandName)
				if(!command) return
				await command.run(client, interaction)
			}
			if(interaction.isButton()) {
				let button = require(`../${interaction.customId}`)
				if(!button) return
				await button(client, interaction)
			}
			if(interaction.isModalSubmit()) {
				let modal = require(`../${interaction.customId}`)
				if(!modal) return
				await modal(client, interaction)
			}
			if(interaction.isSelectMenu()) {
				let select = require(`../${interaction.customId}`)
				if(!select) return
				await select(client, interaction)
			}
			if(interaction.isAutocomplete()) {
				let complete = require(`../${interaction.customId}`)
				if(!complete) return
				await complete(client, interaction)
			}
			if(interaction.isUserContextMenuCommand()) {
				let ctx = require(`../${interaction.customId}`)
				if(!ctx) return
				await ctx(client, interaction)
			}
		} catch(error) {
			console.error(error);
		}
	}
}
