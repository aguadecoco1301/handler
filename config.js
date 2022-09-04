let config = {
	client_id: "YOUR CLIENT ID",
	events: {
		dir: "./events"
	},
	commands: {
		dir: "./commands"
	},
	languages: ["en", "es"],
	default: {
		language: "en", //Default language
		prefix: "." //Default prefix
	}
}

module.exports = config
