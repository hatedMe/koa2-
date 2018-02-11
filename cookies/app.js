const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    const num = ~~ctx.cookies.get('view') + 1;
    ctx.cookies.set('view', num );
    ctx.body = num + ' views';
})

app.listen(4006);