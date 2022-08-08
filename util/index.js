const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { color } = require('console-log-colors')

exports.send = (app) => {
	exports.log = (text, ...args) => {
		if(argv.no-log) return
		const isArgs = args.length !== 0;
		if(isArgs) {
			console.log(`${color.cyan("[BOT]")}: ${text}: ${color.blueBright(args.join(", "))}`)
		} else {
			console.log(`${color.cyan("[BOT]")}: ${text}`)
		}
	}
	exports.reply = (message, {...lang}) => {
		let language = argv.lang || app.config.lang
		if(app.database.has(message.guildId.toString())) {
			language = app.database.get(message.guildId.toString()).lang
		}
        	switch(language) {
                	case "es":
                	        message.reply(lang.es)
                        	break
 			case "en":
        	                message.reply(lang.en)
                	        break
                	default:
				break
        	}
	}
}
