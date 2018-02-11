


const Router = require('koa-router');
const koaBody = require('koa-body')();
const User = require('../module/User');

const router = new Router();

router.post('/',koaBody , async (ctx,next)=>{
    let {username, password} = ctx.request.body;
    await new Promise((resolve,reject) =>{
        resolve ( new User({username , password}).save() )      
    }).then(response=>{
        ctx.body = JSON.parse('{"status": "200", "message": "注册成功"}');
    }).catch(err=>{
        ctx.body = JSON.parse('{"status": "400500", "message":"服务器未知错误"}');
        throw new Error('error 500 ');
    })
});


module.exports = router;