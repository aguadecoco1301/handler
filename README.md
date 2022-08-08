# discordjs-pro-command-handler
A complete Discord.js command and event handler! Miau

# Version

The official version are 2.0.0

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
app.reply(message, {
	en: "Hi world!",
	es: "Hola mundo!"
})
```

The default language changes in config.js, or running by ```node . --lang="LANG"```

# log

The log module send text to console.
Can occult if you run```node . --no-log```

The functionaly is:
```
// • Simple:

app.log("Hi")

#output: 
#[BOT]: Hi

// • Complete:
var fruits = ["apple", "orange", "tomato"]
app.log("Fruits", fruits)

#output: 
#[BOT]: Fruits: apple, orange, tomato
```
