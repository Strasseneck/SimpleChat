import { Message } from '../models/message.js';
import { Chat } from '../models/chat.js';

const getMessages = async (ctx) => {
    try {
        // retrieve user info for bot
        const bot = ctx.get('Bot');
        let chat = await Chat.findOne({
            where: { name: bot }
        });
        if(!chat) {
            ctx.message = `No history for ${bot}`
            ctx.body = {}
            ctx.status = 200;
        }
        else {
            // retrieve messag history
            console.log(`retrieving history for ${chat.name}`)
            const messages = await Message.findAll({where: { ChatId: chat.id}});
            ctx.status = 200;
            ctx.body = messages;
        }
    } catch (error) {
        console.log(`THROWING AN ERROR ${error}`)
        ctx.message = `${error}`
        ctx.throw(404);
    }
};

const addMessage = async (ctx) => {
    try {
        const newMessage = ctx.request.body;
        const chat = ctx.get('Chat')
        let user = await Chat.findOne({
            where: { name: newMessage.chat }
        });

        if (!user) {
            user = await Chat.create({ name: newMessage.chat });
        }

        const savedMessage = await Message.create({
            author: newMessage.author,
            content: newMessage.content,
            timestamp: newMessage.timestamp,
            ChatId: chat.id
        });

        ctx.status = 201;
        ctx.body = savedMessage;
    } catch (error) {
        console.error('Error creating message:', error);
        ctx.message = 'Error creating message';
        ctx.throw(400);
    }
};


export { getMessages, addMessage }