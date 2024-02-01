import { Message } from '../models/message.js';
import { Chat } from '../models/chat.js';


const getMessages = async (ctx) => {
    try {
        const messages = await Message.findAll()
        ctx.status = 200;
        ctx.body = messages;
    } catch (error) {
        ctx.message = `${error}`
        ctx.throw(404);
    }
};

const addMessage = async (ctx) => {
    try {
        const newMessage = ctx.request.body;
        const res = await Message.create({user: user, content: content, tag: tag, foreignKey: chatBot})
        ctx.status = 201;
        ctx.body = res;
    } catch (error) {
        ctx.message = `${error}`;
        ctx.throw(400);
    }
}

export { getMessages, addMessage }