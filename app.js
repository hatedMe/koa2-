


const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const mongoose = require('mongoose');
const render = require('koa-ejs');

const login = require('./router/login');
const register = require('./router/register');

const router = new Router();  // koa-router 7.0以上需要通过 new 的方式
const app = new Koa();

render( app,{    // 视图模块
    root : path.join(__dirname, 'views'),
    layout: '', 
    viewExt: 'html' , 
    cache: false, 
    debug: false 
});  

router.get('/', async (ctx,next) =>{
    await ctx.render( 'login');
});


router.use('/login', login.routes(), login.allowedMethods());
router.use('/register', register.routes(), register.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

mongoose.Promise = global.Promise;   // 注册mongoose 使用promise

let db = mongoose.connect(`mongodb://localhost:27020/login`,{useMongoClient: true});   // 连接数据库
db.once('open',function(){
    console.info(`listening on port 4006 && 数据库连接成功 =======> ok`);
    app.listen(4006);
});











