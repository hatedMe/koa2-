const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // 用户名
    username: { type: String },
    // 密码
    password: { type: String },
    // 创建时间
    createTime: { type: Date }, 
},{ versionKey: false });

let User = mongoose.model('user', UserSchema);

module.exports = User;