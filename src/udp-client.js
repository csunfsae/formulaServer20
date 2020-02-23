var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var arr = [
    1, 2, 123, 321, 222, 126, 432, 232,
    22, 223, 565, 455, 654, 78, 87, 34,
    3, 5, 123, 45355, 3454, 32423, 43424, 324
]
var arr2 = [
    321, 1, 3, 25, 26, 99, 100, 2421, 
    -12, -31, -2, 31, 24, 12, 90, 98, 
    87, 47, 28, 20, 201, 293, 283, 123
]

var intArr = new Int32Array(arr);

var intArr2 = new Int32Array(arr2); 

const buf = Buffer.from(intArr.buffer);

const buf2 = Buffer.from(intArr2.buffer); 

console.log(`Buffer length: ${buf.length}`)
client.send(buf, 8080, "127.0.0.1", (err) => { 
    if(err) {
        console.log(err); 
    }
    // client.close(); 
}); 

client.send(buf2, 8080, "127.0.0.1", (err) => {
    if (err) {
        console.log(err); 
    }
    client.close(); 
})



    // var arr = [
    //     1, 2, 123, 321, 222, 126, 432, 232,
    //     22, 223, 565, 455, 654, 78, 87, 34,
    //     3, 5, 123, 45355, 3454, 32423, 43424, 324, 65]
