module.exports = client => {
    client.on('message', message => {
        if(message.author.bot) return;
        let emojiArray = ['🌞', '🌅']
        let replyArray = ['Good morning', 'Did you sleep well?', 'I hope you had a good sleep!']
        if(message.content.toLowerCase().includes("i can't")) {
            message.react('838394860280479754') // This is an emoji ID, you can get this by doing \:emoji: 
        } else if(message.content.toLowerCase().includes("good morning")) {
            let randomReact = emojiArray[Math.floor(Math.random() * emojiArray.length)];
            let randomReply = replyArray[Math.floor(Math.random() * replyArray.length)];
            message.react(randomReact)
            message.reply(randomReply)
        }
    })
}