const { SlashCommandBuilder } = require("discord.js")
module.exports = new SlashCommandBuilder()
	.setName("help")
	.setNameLocalizations({
		SpanishES: "ayuda",
		EnglishUS: "help"
	})
	.setDescription("Gives you help with your existencial problems")
	.setDescriptionLocalizations({
		SpanishES: "Te ayuda con tus problemas existenciales",
		EnglishUS: "Gives you help with your existencial problems"
	})
