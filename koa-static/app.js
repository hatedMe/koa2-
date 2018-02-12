const Koa = require('koa');
const path = require("path");
const serve = require('koa-static');

const app = new Koa();

app.use( serve( path.join( __dirname , './public' ) ) );


app.use( ctx =>{
    ctx.body = '<a href="./app.css">点击</a>'
})


app.listen(4006)

