var PORT = 8080;

var HOST = 'localhost';

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var arr = [
    1, 2, 123, 321, 222, 126, 432, 232,
    22, 223, 565, 455, 654, 78, 87, 34,
    3, 5, 123, 45355, 3454, 32423, 43424, 324
    ]

    // var arr = [
    //     1, 2, 123, 321, 222, 126, 432, 232,
    //     22, 223, 565, 455, 654, 78, 87, 34,
    //     3, 5, 123, 45355, 3454, 32423, 43424, 324, 65]

var intArr = new Int32Array(arr);

const buf = Buffer.from(intArr.buffer);

console.log(`Buffer length: ${buf.length}`)
client.send(buf, 8080, "127.0.0.1", (err) => { 
    if(err) {
        console.log(err); 
    }
    client.close(); 
})