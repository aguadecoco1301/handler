const { cyanBright } = require("console-log-colors")
const path = require("node:path")
function debug(type, text) {
    if(!(type && text)) throw new Error("Un debug no está completo")
    console.log(
        cyanBright(`[${type.toUpperCase()}]`), text
    )
}

globalThis.debug = debug;
