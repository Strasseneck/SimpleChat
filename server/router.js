import Router from 'koa-router';
import { getMessages, addMessage } from './controllers/messageController.js';
import { generateReply } from './controllers/botReplyController.js';

const router = new Router();

router.get('/botreply', generateReply);
router.get('/messages', getMessages);
router.post('/messages', addMessage);

export { router }