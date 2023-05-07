const discord = require("discord.js")
const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds
    ]
})

require("./_handler")(client)

client.login(process.env.token)
