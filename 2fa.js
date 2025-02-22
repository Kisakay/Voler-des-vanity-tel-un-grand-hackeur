const { Client } = require("discord.js-selfbot-v13-kisakay-patch");

const TOKEN = "MTIzNDU2NzY3OTk5OTRmODQzMw.Ki4BpG.8fLR-b_yYJA7Zv7h6c0aPJZuZDWqrXQV"
// le token du compte

const GUILD_ID = "ID DU SERVEUR"
// l'id du serveur

const NEW_VANITY_URL = "vanity-x"
// le nouveau vanity url

const TOTP_KEY = "iqme ---- ---- ---- ---- ---- ---- vob7";
// regarder le readme pour savoir comment obtenir le TOTP key

const client = new Client({
    TOTPKey: TOTP_KEY.split(" ").join(' ').replace(/\s+/g, '').toUpperCase(),
})

client.on("ready", async (client) => {
    console.log("Changing vanity url...");

    try {
        const data = await client.api.guilds(GUILD_ID, 'vanity-url').patch({
            data: {
                code: NEW_VANITY_URL
            },
        });

        console.log(data)
    } catch (error) {
        console.error(error)
    }
})

client.login(TOKEN)