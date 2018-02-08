


const Router = require('koa-router');
const koaBody = require('koa-body')();
const User = require('../module/User');

const router = new Router();

router.post('/',koaBody , async (ctx,next)=>{
    let {username, password} = ctx.request.body;
    let res = await User.findOne({ username , password })
    if( res === null ){
        ctx.body = JSON.parse(`{"status": 400404,"message":"账号或者密码错误"}`);
    }else{
        ctx.body = JSON.parse(`{"status": 200,"message":"登录成功"}`);
    }
});


module.exports = router;