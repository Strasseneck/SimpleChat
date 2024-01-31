import Router from 'koa-router';
import messageController from ('./controllers/messageController');

const router = new Router();

router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessage);

router.get('/chat', chatController.getChat);


module.exports = router;