import Router from 'koa-router';

const router = new Router();

router.get('/messages', message.getMessages);
router.post('/messages', message.postMessage);


module.exports = router;