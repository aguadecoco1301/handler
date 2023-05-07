module.exports = (client) => {
    const fs = require("node:fs")
    const path = require("node:path")
    let events = fs.readdirSync(path.join(__dirname, "events"))

    events.forEach((file) => {
        let event = {
            name: file.replace(".js", ""),
            code: require(path.join(__dirname, "events", file))
        }

        client.on(event.name, (...args) => event.code(...args))
    })
}
