

const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');




mongoose.Promise = global.Promise;

let db = mongoose.connect(``,{useMongoClient: true});
db.once('open',function(){
    console.info(`listening on port 4006 && 数据库连接成功 =======> ok`);
    app.listen( 4006 );
});