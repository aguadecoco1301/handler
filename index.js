/*							*\
===========================================================
≈≈≈		★ Developer: AguaDeCoco#1301            ≈≈≈
≈≈≈		☆ Made with ♡ in Argentina	        ≈≈≈
===========================================================
\*							*/

const app	= new Object()
app.libs	= new Object()
app.libs.discord= require("discord.js")
app.reply	= require("./util/index.js").reply
app.client 	= new app.libs.discord.Client({
	intents: [
		app.libs.discord.GatewayIntentBits.MessageContent,
		new app.libs.discord.IntentsBitField(32767)
	]
})
const fs	= require("fs")
app.config	= require("./config.js")
app.debug	= require("./util/index.js").debug
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
app.commands = new app.libs.discord.Collection()
app.commands._config = new app.libs.discord.Collection()
const commandDirs = fs.readdirSync(app.config.commands.dir)
for(const dirs of commandDirs) {
	const commands = fs.readdirSync(`${app.config.commands.dir}/${dirs}`).filter(f => f.endsWith(".js"))
	for(const file of commands) {
		app.debug("Loaded", file)
		const cmdConf	= require(`./${app.config.commands.dir}/${dirs}/config.js`)
		const cmd	= require(`./${app.config.commands.dir}/${dirs}/index.js`)
		app.commands.set(cmdConf.name, cmd)
		if(cmdConf.alias) {
			cmdConf.alias.map(i => {
				app.commands.set(i, cmd)
			})
		}
		app.commands._config.set(cmdConf.name, cmdConf)
	}
	app.debug("Commands", dirs)
}
app.client.login(app.config.token)
.then(app.debug("Logged"))
.catch(error => console.error(error))

module.exports = app
require("./util/index.js").config(app)
