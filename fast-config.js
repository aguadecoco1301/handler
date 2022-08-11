// This script modify the bot config.
// Run using "node fast-config.js"
const config = require("./config.save.js")
const fs     = require("fs")
var log	     = ""
console.log("Welcome!\nThis script help you to configure the bot.\nCancel with: CTRL + C\n")

const stages = {
	token: {
		text: "Input the bot token: ",
		then: (in) => {
			config.token = in
		}
	},
	prefix: {
		text: "Input the bot prefix: ",
		default: "-",
		then: (in) => {
			config.default.prefix = in
		}
	},
	language: {
		text: "Input the default language: es/en: ",
		default: "en",
		then: (in) => {
			config.default.language = in
		}
	}
}
function addLog(text) {
        log = log + text
        return
}
function async quest() {
	await stages.forEach(stage => {
		var text = ""
		text = stage.text
		if(stage.default) {
			text = text + `(${stage.default}) `
		}
		process.stdout.send(text)
		//get input
		stage.then(input)
		addLog(`[CONFIG] ${stage.text} = ${input}`)
	})
	function then() {
		return addLog(`[CONFIG] End`)
	}
}

quest().then()
