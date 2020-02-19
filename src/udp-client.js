var PORT = 8080;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

// _data =[-284,97.3002,142.458,0.440512,2.45745,-0.144664,-0.17135,-18.0888,-0.507999,1.4921e-021,3.27051e-018,-0.0534133,-0.000146994,33.8001,0.463196,4.90246e-021,5.86576e-018,-0.0957984,2.09062,-14.5077,0.266143,-4.29059e-007,-1.04696e-007,-7.84019e-016,-4.04058,-15.1361,-3.75471,6.63063e-020,2.15707e-017,-0.352291,7.47538e-005,29.8537,5.90907,3.48822e-023,-4.28574e-019,0.00699938,1.40942,-15.474,0.186975,0.0293333,-0.019122,4.3858e-005,0.01778,-0.263464,0.123309,-0.196127,0.018499,0.0899181,-0.193886,0.0187146,0.0906704,-0.193708,0.0189286,0.0912595,-12.7908,0,-7.41445,-51.7233,9.71027,-4.09645,-0,1.34465,0,42.7628,43.1268,-53.5281,-0,0.542484,0,-15.8093,1.1398,-8.18984,-11.3353,5.42235,10.9137,-30.5178,-1.01592,1.72285,-26.2457,0,0,-0,0,0,-29.8264,-0.995051,0.607773,-112.753,0,0,-53.037,0,0,-0,0,0,-33.1392,-1.09366,5.26616,-111.292,0,0,-50.936,0,0,-0,0,0,-32.1005,-1.06312,0.623497,-103.333,0,0,-43.6037,0,0,-0,0,0,-5.9451,-0.207234,4.09042,-96.4444,0,0,-38.244,0,0,-0,0,0,19.4098,9.98358e-016,10.5068,50.3766,4.8873,2.22908,3.1563e-016,2.57567,-7.09555e-018,-36.3347,40.6501,48.4687,-7.43586e-006,0.592876,-2.70893e-006,16.9705,-0.244893,-1.64202,11.331,5.42212,-10.9131,29.2193,-0.97661,-1.74543,24.8369,0,0,0,0,-0,29.7912,-0.993986,-0.605762,112.622,0,0,52.9584,0,0,0,0,-0,33.0111,-1.08992,-3.26718,111.073,0,0,51.0729,0,0,0,0,-0,32.4514,-1.07348,1.33472,102.94,0,0,43.1189,0,0,0,0,-0,5.87599,-0.204834,-2.10028,96.0519,0,0,38.4021,0,0,0,0,-0,-2.97445,-2.05615,0.876116,5.61002,-7.05385,-0.893018];
_data = [1, 2, 3,  8, 90, 1231 ,1231, 2, 3, 4, 5, 6, 7, 8, 90, 1231 ,1231, 1231 ,1231, 2, 3, 4, 5, 6, 7, 8, 90, 1231 ,1231, 2, 3, 4, 5, 6, 7, 8, 90, 1231 ,123 ]

// var buf = new Buffer(4); 
// buf[0] = 0x3;
// buf[1] = 0x4;
// buf[2] = 0x23;
// buf[3] = 0x42;

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0x12, 0x34, 0x56, 0x78, 0x90, 0xab,0x12, 0x34, 0x56, 0x78, 0x90, 0xab,0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0x12, 0x34]);
// const arr = new Uint32Array(2);
console.log(buf.length);
console.log(buf.toString("hex"))
client.send(buf, 0, buf.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});
// // Require node js dgram module.
// var dgram = require('dgram');

// // Create a udp socket client object.
// var client = dgram.createSocket("udp4");

// // message variable is used to save user input text.
// var message = "";

// // Set command line input character encoding to utf-8.
// process.stdin.setEncoding('utf-8');

// // When receive user input data in console.
// process.stdin.on('data', function (text) {

//     // If user input 'send\n' then send all user input data to udp server.
//     if('send\n' === text) {

//         // If user do not input data in command line then send default message.
//         if (message == null || message.length == 0) {
//             message = "Hello udp server.";

//         }

//         console.log("User input : " + message);

//         // Create a node Buffer object to wrap message object.
//         message = new Buffer(message);

//         // Send message to udp server through client socket.
//         client.send(message, 0, message.length, 8080, "127.0.0.1");

//     }else{
//         // Concat all user input text in message.
//         message += text;
//     }
// });
// buf[4] = 0x3;
// buf[5] = 0x4;
// buf[6] = 0x23;
// buf[7] = 0x42;
// buf[8] = 0x3;
// buf[9] = 0x4;
// buf[10] = 0x23;
// buf[11] = 0x42;
// buf[12] = 0x3;
// buf[13] = 0x4;
// buf[14] = 0x23;
// buf[15] = 0x42;
// buf[16] = 0x3;
// buf[17] = 0x4;
// buf[18] = 0x23;
// buf[19] = 0x42;
// buf[20] = 0x3;
// buf[21] = 0x4;
// buf[22] = 0x23;
// buf[23] = 0x42;
// buf[24] = 0x3;
// buf[25] = 0x4;
// buf[26] = 0x23;
// buf[27] = 0x42;
// buf[28] = 0x3;
// buf[29] = 0x4;
// buf[30] = 0x23;
// buf[31] = 0x42;
// buf[32] = 0x42;

// const buf = new Buffer(_data);



//////-------------------------

/*

var http = require('http'),
    dgram = require('dgram'),
    socketio = require('socket.io');
var fs = require('fs');
var app = http.createServer(),
    io = socketio.listen(app),
    socket = dgram.createSocket('udp4');

var crlf = new Buffer(2);
crlf[0] = 0xD; //CR - Carriage return character
crlf[1] = 0xA; //LF - Line feed character

socket.on('message', function(content, rinfo) {
   console.log('got message', content.readUInt16LE(0), 'from', rinfo.address, rinfo.port);
    io.sockets.emit('udp message', content.readUInt16LE(0)); 

});

socket.bind(6000);
app.listen(8000);
*/