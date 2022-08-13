/*							*\
===========================================================
≈≈≈		★ Developer: AguaDeCoco#1301            ≈≈≈
≈≈≈		☆ Made with ♡ in Argentina	        ≈≈≈
===========================================================
\*							*/
/*
	• Please, don't edit this file.
	• This handler is in development, then, update
	the handler is important.
	• Modify "extra.js"
*/
// < ——		App			—— >
const app	= new Object()
app.libs	= new Object()

/*
	• app is a global object.
	• You can save variables; libraries; and
	more, for next use that in any part of
	the code.
	• You can edit that how you need
*/

// < —— 	Libraries		—— >
app.libs.discord= require("discord.js")
app.libs.fs	= require("fs")
app.libs.JSONdb = require("simple-json-db")
// < ——		Discord Client		—— >
app.client 	= new app.libs.discord.Client({
	intents: [
		app.libs.discord.GatewayIntentBits.MessageContent,
		new app.libs.discord.IntentsBitField(32767)
	]
})
app.config	= require("./config.js")

// < ——		Util			—— >
let util 	= require("./util/index.js")
app.lang	= util.lang
app.log		= util.log
app.get		= util.get
util.send(app)

// < ——		Database		—— >
app.database	= new app.libs.JSONdb("data.json")

// < —— 	Event Handler    	—— >
const eventsDir = app.libs.fs.readdirSync(app.config.events.dir).filter(f => f.endsWith(".js"))
for(const file of eventsDir) {
	const event = require(`${app.config.events.dir}/${file}`)
	app.client.on(event.name, (...args) => {
		event.run(app, ...args)
	})
}

// < ——		Command Handler		—— >

app.commands		= new app.libs.discord.Collection()
app.commands._config	= new app.libs.discord.Collection()
app.commands.alias	= new app.libs.discord.Collection()
const commandDirs	= app.libs.fs.readdirSync(app.config.commands.dir)
for(const dirs of commandDirs) { //./commands/$
	const commands = app.libs.fs.readdirSync(`${app.config.commands.dir}/${dirs}`).filter(f => f.endsWith(".js"))
	commands.forEach(() => { //./commands/$comando/$
		const cmdConf	= require(`./${app.config.commands.dir}/${dirs}/config.js`)
		const cmd	= require(`./${app.config.commands.dir}/${dirs}/index.js`)
		app.commands.set(cmdConf.name, cmd)
		app.commands._config.set(cmdConf.name, cmdConf)
		if(cmdConf.alias) {
			cmdConf.alias.map(alias => {
				app.commands.alias.set(alias, cmd)
				app.commands._config.set(alias, cmdConf)
			})
		}
		if(cmdConf.allow_slash) {
			//slash
		}
	})
}
/*

	• The command's config is saved in the object
	app.commands._config
	• The command's aliases is saved in the object
	app.commands.alias

*/

// < ——		Log-in			—— >
require('dotenv').config();

function logError(error) {
	console.error
	app.log("Trying to reconnect...")
}
function login(token) {
	app.client.login(token)
	.then(app.log("Log-in..."))
	.catch(error => {
		console.error(error)
		app.log("Trying to reconnect...")
		login(process.env.token)
	})
}

login(process.env.token)
app.client.on('error', error => {
	logError(error)
	login(process.env.token)
})

// < ——		Extra			—— >

let extra = require("./extra.js")
extra(app)
