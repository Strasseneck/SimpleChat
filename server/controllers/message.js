import { getAllMessages, addNewMessage } from ('../models/message');

exports.getMessages = async (ctx) => {
    try {
        const messages = await getAllMessages();
        ctx.status = 200;
        ctx.body = messages;
    } catch (error) {
        ctx.message = `${error}`
        ctx.throw(404);
    }
};

exports.addMessage = async (ctx) => {
    try {
        const newMessage = ctx.request.body;
        const res = await addNewMessage(newMessage);
        ctx.status = 201;
        ctx.body = res;
    } catch (error) {
        ctx.message = `${error}`;
        ctx.throw(400);
    }
}