const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { color } = require('console-log-colors')

let app
exports.send = (appl) => {
	app = appl
}
exports.log = (text, ...args) => {
	if(argv.nolog) return
	const isArgs = args.length !== 0
	if(isArgs) {
		console.log(`${color.cyan("[BOT]")}: ${text}: ${color.blueBright(args.join(", "))}`)
	} else {
		console.log(`${color.cyan("[BOT]")}: ${text}`)
	}
}
exports.lang = ({...lang}, message) => {
	if(argv.lang) return lang[argv.lang]
	if(app.database.has(message.guildId.toString())) {
		var language = app.database.get(message.guildId.toString()).language
	} else {
		var language = app.config.default.language
	}
	return lang[language]
}
exports.get = (guild) => {
	const has = app.database.has(guild)
	if(has) {
		let get = app.database.get(guild)
		let res = {
			prefix: get.prefix,
			language: get.language
		}
		return res
	} else {
		const cDefault = app.config.default
		let res = {
			prefix: cDefault.prefix,
			language: cDefault.language
		}
		return res
	}
}
