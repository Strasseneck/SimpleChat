
import bodyParser from 'koa-bodyparser';
import { sequelize } from './models/index.js';
import Koa from 'koa';
import serve from 'koa-static';
import { router } from './router.js';

const app = new Koa();
const PORT = 3000;

app.use(serve('../client'))
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


async function bootstrap () {
    await sequelize.sync({ force : true });
    app.listen(PORT)
    console.log(`Server running at http://localhost:${PORT}`)
}

bootstrap ();


