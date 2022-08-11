let config = {
	token: "MTAwMzEwMTA2NTA2MDgyNzE3Ng.GqNthX.FRmQofXs7tEyjWwDZFUywK-uOBNLnoGIftnOBc",//"YOUR TOKEN HERE",
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
		lang: "es", //Default language
		prefix: "." //Default prefix
	}
}

module.exports = config
