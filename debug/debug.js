const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { color } = require('console-log-colors');
module.exports = (text, ...args) => {
	if(!argv.debug) return
	const isArgs = args.length !== 0;
	if(isArgs) {
		console.log(`${color.cyan("[DEBUG]")}: ${text}: ${color.blueBright(args.join(", "))}`)
	} else {
		console.log(`${color.cyan("[DEBUG]")}: ${text}`)
	}
}
