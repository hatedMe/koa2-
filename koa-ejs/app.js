const Koa = require('koa');
const app = new Koa();

const render = require('koa-ejs');
const path = require('path');


render(app, { root: path.join(__dirname, './'), layout: '', viewExt: 'ejs', cache: false, debug: false });


app.use( async ctx => {
    await ctx.render('index',{
        title : 'koa2-ejs-example',
        info : '我是通过传参来的'
    }); 
})


app.listen(4006);