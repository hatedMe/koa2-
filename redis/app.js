const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const koaBody = require('koa-body')();

const app = new Koa();
const router = new Router();

const client = require('./redis.js');


router.post('/testtokent' , koaBody , async ctx =>{
    let { name, password } = ctx.request.body;
    console.log( name , password );
    // 简单验证账号密码  
    if( name === 'admin' && password === '123456' ){
        let token = jwt.sign({ userInfo: `${name}` }, 'token',{ expiresIn: 7200 });
        client.set( 'token' , token , 'EX' , 7200 , () => {
            console.log( 'token is save sussess' );
        });
        ctx.body = JSON.parse(`{"status": 200,"message":"获取成功","token":"${token}"}`);
    }else{
        ctx.body = JSON.parse(`{"status": "400100","message":"账号密码不对称"}`);
    }

});


router.post('/verifytokent' , koaBody , async ctx =>{
    let { assess_token } = ctx.request.body;
    var decoded = jwt.verify(assess_token, 'token');
    console.log( decoded.userInfo ); // 得到提交用户的id.
    ctx.body = JSON.parse(`{"status": 200, "username" : "${decoded.userInfo}" }`);
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(4006);