const fs = require("node:fs")
const path = require("node:path")
const discord = require("discord.js")
module.exports = (client) => {
    
    let commands = []
    client.commands = new discord.Collection()

    fs.readdirSync(path.join(__dirname, "commands")).forEach((cmd) => {
        let command = require(path.join(__dirname, "commands", cmd, "cmd.js"))

        commands.push(command.data.toJSON())
        client.commands.set(command.data.name, command.code)
    })

    new discord.REST().setToken(process.env.token)
    .put(discord.Routes.applicationCommands(process.env.id), { body: commands })
    
    fs.readdirSync(path.join(__dirname, "events"))
    .forEach((file) => {
        let event = {
            name: file.replace(".js", ""),
            code: require(path.join(__dirname, "events", file))
        }

        client.on(event.name, (...args) => event.code(client, ...args))
    })
}
