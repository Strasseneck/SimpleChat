import { Message } from '../models/message.js';
import { User } from '../models/user.js';

const getMessages = async (ctx) => {
    try {
        // retrieve user info for bot
        const bot = ctx.get('bot');
        let user = await User.findOne({
            where: { name: bot }
        });
        if(!user) {
            ctx.message = `No history for ${bot}`
            ctx.body = {}
            ctx.status = 200;
        }
        else {
            // retrieve messag history
            console.log(`retrieving history for ${user.name}`)
            const messages = await Message.findAll({where: { UserId: user.id}});
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
        let user = await User.findOne({
            where: { name: newMessage.author }
        });

        if (!user) {
            user = await User.create({ name: newMessage.author });
        }

        const savedMessage = await Message.create({
            author: newMessage.author,
            content: newMessage.content,
            timestamp: newMessage.timestamp,
            UserId: user.id
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