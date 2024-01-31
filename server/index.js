import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

const app = new Koa();
const PORT = 3000;

app.use(serve(config.clientPath()));
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})



