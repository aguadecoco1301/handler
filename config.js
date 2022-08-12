let config = {
	events: {
		dir: "./events"
	},
	commands: {
		dir: "./commands"
	},
	languages: {
		en: {
			name: "en",
			comp: "English",
			flag: "🇺🇸"
		},
		es: {
			name: "es",
			comp: "Español",
			flag: "🇪🇸"
		}
	},
	default: {
		language: "en", //Default language
		prefix: "." //Default prefix
	}
}

module.exports = config
