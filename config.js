let config = {
	token: "YOUR TOKEN HERE",
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
		lang: "en", //Default language
		prefix: "." //Default prefix
	}
}

module.exports = config
