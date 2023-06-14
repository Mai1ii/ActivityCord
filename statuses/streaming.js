let discord = require('discord.js-selfbot-v11')
const chalk = require("chalk");
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
let client = new discord.Client()

CLIENT_ID = "951397716934668308"
IMAGE_NAME = ".gg/societea"
LARGE_TEXT = ".gg/societea"
SMALL_TEXT = "Join Now!"
LINK = "https://discord.gg/societea"
 
client.on("ready", () => {
    rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("societea")
        .setUrl(LINK)
        .setType("STREAMING")
        .setApplicationId(CLIENT_ID)
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText(SMALL_TEXT)
        .setDetails(LARGE_TEXT)
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(("[" + chalk.magentaBright.bold("STREAMING") + "]") + ` Successfully logged in as ${client.user.username} (${client.user.id})on Discord!`);
})

client.login(TOKEN)
