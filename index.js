/*							*\
===========================================================
≈≈≈		★ Developer: AguaDeCoco#1301            ≈≈≈
≈≈≈		☆ Made with ♡ in Argentina	        ≈≈≈
===========================================================
\*							*/

const app	= new Object()
app.libs	= new Object()
app.libs.discord= require("discord.js")
app.reply	= require("reply")
app.client 	= new app.libs.discord.Client({
	intents: [
		app.libs.discord.GatewayIntentBits.MessageContent,
		new app.libs.discord.IntentsBitField(32767)
	]
})
const fs	= require("fs")
app.config	= require("./config.js")
app.debug	= require("debug")
app.debug("Initialized")
// < —— 	Event Handler    	—— >

const eventsDir = fs.readdirSync(app.config.events.dir).filter(f => f.endsWith(".js"))
for(const file of eventsDir) {
	app.debug("Loaded", file)
	const event = require(`${app.config.events.dir}/${file}`)

	app.client.on(event.name, (...args) => {
		event.run(app, ...args)
	})
}
const commandDirs = fs.readdirSync(app.config.commands.dir)
for(const dirs of commandDirs) {
	const commands = fs.readdirSync(`${app.config.commands.dir}/${dirs}`)
	for(const file of commands) {
		app.debug("Loaded", file)
	}
	app.debug("Commands", dirs)
}
let token = require("./env.js")
app.client.login(/*app.config.token*/token)
.then(app.debug("Logged"))
.catch(error => console.error(error))
