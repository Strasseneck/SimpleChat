
import bodyParser from 'koa-bodyparser';
import db from ('./models/index.js');
import Koa from 'koa';
import serve from 'koa-static';
import router from ('./router');

const app = new Koa();
const PORT = 3000;

app
  .use(serve('../../client'))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


async function bootstrap () {
    await db.sync();
    app.listen(PORT)
    console.log(`Server running at http://localhost:${PORT}`)
}

bootstrap ();


