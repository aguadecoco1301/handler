# discordjs-pro-command-handler
A complete Discord.js command and event handler! Miau

# reply
The module reply send messages in a selected languages.
The functionaly is easy:
```
const reply = require("./util/index.js").reply

reply(message, {
	en: "Hi world!",
	es: "Hola mundo!"
})```

The default language changes in config.js, or running by:
```node . --lang="LANG"```

Note: In bot, was called "app.reply()"
# debug

The module debug log in console text, only appears if you run:
```node . --debug```
The functionaly is:
```
const debug = require("./util/index.js").debug
// • Simple:
debug("Hi")

//output: [DEBUG]: Hi

// • Complete:
var fruits = ["apple", "orange", "tomato"]
debug("Fruits", fruits)

//output: [DEBUG]: Fruits: apple, orange, tomato
```

Note: In bot, was called "app.debug()"

