/*														 *\
===========================================================
≈≈≈		★ Developer: AguaDeCoco#1301           		 	≈≈≈
≈≈≈		☆ Made with ♡ in Argentina	        			≈≈≈
===========================================================
\*														 */


/*
	• Please, don't edit this file.
	• This handler is in development, then, update
	them is very important.
	• Modify "extra.js"
*/

// < —— 	Libraries		—— >
const discord	= require("discord.js")
const fs		= require("fs")

// < ——		Discord Client		—— >
const client 	= new discord.Client({
	intents: [
		new discord.IntentsBitField(32767)
	]
})
client.config	= require("./config.js")

// < —— 	Event Handler    	—— >
const eventsDir = fs.readdirSync(client.config.events.dir).filter(f => f.endsWith(".js"))
for(const file of eventsDir) {
	const event = require(`${client.config.events.dir}/${file}`)
	client.on(event.name, (...args) => {
		try {
			event.run(client, ...args)
		} catch(error) {
			console.log(error)
		}
	})
}

// < ——		Command Handler		—— >
client.commands			= new discord.Collection()
client.commands._config	= new discord.Collection()
const commandDirs		= fs.readdirSync(client.config.commands.dir)
for(const dirs of commandDirs) {
	const cmdConf	= require(`./${client.config.commands.dir}/${dirs}/config.js`)
	const cmd		= require(`./${client.config.commands.dir}/${dirs}/index.js`)
	client.commands.set(cmdConf.name, cmd)
	client.commands._config.set(cmdConf.name, cmdConf)
	console.log(cmdConf)
}

// < ——		Log-in			—— >
require('dotenv').config();
const rest = new discord.REST({ version: '10' })
.setToken(process.env.token);

(async() => {
	console.log(`Started refreshing ${client.commands.length} application (/) commands.`);
	let data = await rest.put(
		discord.Routes.applicationCommands(client.config.user_id),{ body: client.commands._config }
	)
	console.log(`Successfully reloaded ${data.length} application (/) commands.`);
})()
function login(token) {
	client.login(token)
	.then(console.log("Log-in..."))
	.catch(error => {
		console.error(error)
		console.log("Trying to reconnect...")
		setTimeout(() => {
			login(process.env.token)
		}, 1000)
	})
}
login(process.env.token)

// < ——		Extra			—— >

let extra = require("./extra.js")
extra(client)
