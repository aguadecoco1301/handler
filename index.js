/*							*\
===========================================================
≈≈≈		★ Developer: AguaDeCoco#1301            ≈≈≈
≈≈≈		☆ Made with ♡ in Argentina	        ≈≈≈
===========================================================
\*							*/
const app	= new Object()
const discord	= require("discord.js")
const fs	= require("fs")
app.config	= require("./config.js")
app.debug	= require("debug")
app.debug("Initialized")
// < —— 	Event Handler    	—— >

const eventsDir = fs.readdirSync(app.config.events.dir).filter(f => f.endsWith(".js"))
for(const file of eventsDir) {
	app.debug("Loaded", file)
}
