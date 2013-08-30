/**
 * Created with JetBrains WebStorm.
 * User: tmacbook
 * Date: 8/30/13
 * Time: 10:40 AM
 * Author:  TJ Marbois
 */
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(err){
    console.log('Error ' + err);
});

client.set('color', 'red', redis.print);
client.get('color', function(err, value) {
    if(err) throw err;
    console.log('Got: ' + value);
});

client.hmset('camping', {
    'shelter': '2-person tent',
    'cooking': 'campstove'
}, redis.print);

client.hmget('camping', 'cooking', function(err, value){
    if (err) throw err;
    console.log('Will be cooking with: ' + value);
});

