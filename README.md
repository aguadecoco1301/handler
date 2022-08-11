# discordjs-pro-command-handler
A complete Discord.js command and event handler! Miau

# Version

The official version are 2.0.0

# Fast config

The handler includes fast-config.js script. They help you to configure the bot.
Run ```node fast-config.js```
and complete all data


# Configuration

The handler are so configurable, there's a list with all modifications what you can edit

1) Token:
	Configurate the token are required.
	Only put your bot token in config.js > Token. 
2) Events & Commands folders:
	In config.js are listed two folders, you can modify the names.
3) Default prefix & language:
	In default of config.js you can change "language" for spanish changing "en" for "es", and default token.

# extra.js

The handler are in development, so, updating is necesary.
Then, if you need input code in index.js, just put in extra.js.

# app.lang
The module reply return a text in a selected language, reffered by guild.
The functionaly is easy:
```
app.lang({
	en: "Hi world!",
	es: "Hola mundo!"
}, message)
# output:
# "Hi world!"
# or:
# "Hola mundo!"
```

Change the default language in config.js, or running by ```node . --lang="LANG"```

# app.log

The log module send text in console.
Can be occulted running ```node . --no-log```

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
