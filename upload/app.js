const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const multer = require('koa-multer'); //加载koa-multer模块
const fs = require('fs');
const upload = multer({dest: '/public/uploads/'});
const router = new Router();
const app = new Koa();


router.get('/', async (ctx, next) => {
    ctx.body = 'hello word';
});


// 上传
router.post('/upload', upload.array('image'), async (ctx, next) => {

    const arrayList = ctx.req.files;
    // console.log( arrayList );
    var usrreq = [];
    const saveImage = e => {
        let fileFormat = e.originalname.split(".");
        let imgName = Date.now() + Math.random().toString(36).substr(2, 1) + '.' + 'jpg'; // fileFormat[fileFormat.length - 1]
        let filepath = path.join(__dirname, "./public/uploads/" + imgName);
        return new Promise((resolve, reject) => {
            fs.rename(e.path, filepath, () => {
                let ctxBody = {};
                ctxBody.fileName = imgName;
                ctxBody.mimetype = e.mimetype;
                ctxBody.size = e.size;
                resolve(ctxBody);
            });
        });
    };
    for (var i = 0; i < arrayList.length; i++) {
        let lesult = await saveImage(arrayList[i]);
        usrreq.push(lesult)
    }
    ctx.body = {
        "status": "200",
        "message": "ok",
        "data": usrreq
    }
});


app.use(router.routes()).use(router.allowedMethods());


app.listen(4006 , () =>{
    console.info(`listening on port 4006 =======> ok`);
});
