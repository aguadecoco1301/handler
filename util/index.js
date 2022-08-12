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
	let language = argv.lang || app.config.default.language
	if(app.database.has(message.guildId.toString())) {
		language = app.database.get(message.guildId.toString()).lang
	}
	return lang[language]
}
exports.get = (guild) => {
	const has = app.database.has(guild)
	if(has) {
		const get = app.database.get(guild)
		let res = {
			prefix: get.prefix,
			lang: get.lang
		}
		return res
	} else {
		const cDefault = app.config.default
		let res = {
			prefix: cDefault.prefix,
			lang: cDefault.lang
		}
		return res
	}
}
