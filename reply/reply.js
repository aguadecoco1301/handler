let language = (guild) => {
        return "es"
}
let reply = (message, {...lang}) => {
        switch(language(message.guild)) {
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


module.exports = reply
