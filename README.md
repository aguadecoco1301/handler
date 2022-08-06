# discordjs-pro-command-handler
A complete Discord.js command and event handler! Miau

# Version

The official version are now 1.0.0

# Configuration

The handler are so configurable, there's a list with all modifications what you can edit

1) Token:
	Configurate the token are required.
	Only put your bot token in config.js > Token. 
2) Events & Commands folders:
	In config.js are listed two folders, you can modify the names.
3) Default language:
	In config.js you can change "language" for spanish changing "en" for "es"
# reply
The module reply send messages in a selected languages.
The functionaly is easy:
```
const reply = require("./util/index.js").reply

reply(message, {
	en: "Hi world!",
	es: "Hola mundo!"
})
```

The default language changes in config.js, or running by ```node . --lang="LANG"```

Note: In handler are tagged "app.reply()"

# debug

The module debug log in console text, only appears if you run```node . --debug```

The functionaly is:
```
const debug = require("./util/index.js").debug
// • Simple:
debug("Hi")

#output: 
#[DEBUG]: Hi

// • Complete:
var fruits = ["apple", "orange", "tomato"]
debug("Fruits", fruits)

#output: 
#[DEBUG]: Fruits: apple, orange, tomato
```

Note: In handler are tagged "app.debug()"

