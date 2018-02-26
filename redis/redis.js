const redis = require('redis');

let config = {
    redisHost: '127.0.0.1',
    redisPort:  6379,
    redisPassword: ''
}


const auth = config.redisPassword ? {password: config.redisPassword} : {};

let client = redis.createClient(Object.assign({}, auth, {
    host: config.redisHost,
    port: config.redisPort
}));


client.on('error', function(err) {
    console.error('Redis Error ' + err)
})
  
client.on('connect', function() {
    console.log('Redis is ready')
});


module.exports = client;