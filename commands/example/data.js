const { SlashCommandBuilder } = require("discord.js")
module.exports = new SlashCommandBuilder()
	.setName("example")
	.setNameLocalizations({
		SpanishES: "ejemplo",
		EnglishUS: "example"
	})
	.setDescription("A simple hello world script")
	.setDescriptionLocalizations({
		SpanishES: "Un simple script de hola mundo",
		EnglishUS: "A simple hello world script"
	})
