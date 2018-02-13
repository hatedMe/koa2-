

const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');




mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost:27017`);
mongoose.connection.on('connected', function () {    
    console.log('listening on port 4006 && 数据库连接成功 =======> ok');  
    app.listen( 4006 );
}); 
