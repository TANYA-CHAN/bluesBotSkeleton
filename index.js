const Discord = require('discord.js')

const { 
    wholesomeReplies
} = require('./modules')

const client = new Discord.Client();
require('dotenv').config()
const discordAuthToken = process.env.discordAuthToken;

client.on('ready', () => {
    console.log(`Client has logged in on ${client.guildes.cache.size} guilds`)
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Relaxing Breath of the Wild music with rain',
            type: 'LISTENING',
            url: 'https://www.youtube.com/watch?v=hjQfYEjvJeU'
        }
    })

    wholesomeReplies(client)
})

client.login(discordAuthToken)