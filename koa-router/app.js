const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const router = new Router();


// koa-router 更多使用方法 见 
// https://github.com/alexmingoia/koa-router

router.get('/', ctx => {
    ctx.body = '<a href="/a">跳转到a页面</a>'
})

router.get('/a', ctx => {
    ctx.body = '<a href="/">跳转到根页面</a>'
})


app.use(router.routes()).use(router.allowedMethods());

app.listen(4006);