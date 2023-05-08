const { cyanBright } = require("console-log-colors")

globalThis.debug = function(type, text) {
    if(!(type && text)) throw new Error("Un debug no está completo")
    console.log(
        cyanBright(`[${type.toUpperCase()}]`), text
    )
}
globalThis.execute = function(dir, client, interaction) {
    require(path.resolve(dir))(client, interaction)
}

globalThis.path = require("node:path")