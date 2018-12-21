import Koa from 'koa';
import Router from 'koa-router';
import createRoutes from './infrastructure/router';

const app = new Koa();
const router = new Router();

createRoutes(router);

app.use(router.routes());

console.log('Listening on port 3000');
app.listen(3000);
