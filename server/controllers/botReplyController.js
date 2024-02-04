import { botReplies } from "./botReplies.js";

const generateReply = async (ctx) => {
    try {
    const bot = ctx.get('bot');
    //Generate random reply from options make sure not 0
     let replyIndex = Math.floor(Math.random() * 5);
     while(replyIndex === 0) {
        replyIndex = Math.floor(Math.random() * 5);
     }
     const reply = botReplies[`${bot}Replies`][replyIndex];
     ctx.status = 200;
     ctx.body = JSON.stringify(reply);
    } catch (error) {
        ctx.message = `${error}`
        ctx.throw(404);
    }
};

export { generateReply }