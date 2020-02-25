var dgram = require('dgram');
var client = dgram.createSocket('udp4');

// 1582574515
var sampleData = {
    unixEpoch: 1582672242,
    msTimer: 659,
    steeringAngle: 159 * 1000,
    batteryTemperature: 23 * 1000,
    batteryVoltage: 70 * 1000, 
    motorSpeed: 65* 1000, 
    gear: 3,
    waterTemperature: 70,
    lat: 34.2418 * 1000,
    long: -118.5289 * 1000,
    xAccelerometer: 20 * 1000,
    yAccelerometer: 30 * 1000, 
    zAccelerometer: 40 * 1000,
    xGyro: 13 * 1000,
    yGyro: 8 * 1000,
    zGyro: 2 * 1000,
    flSuspension: 33 * 1000,
    frSuspension: 23 * 1000,
    rlSuspension: 41 * 1000,
    rrSuspension: 9 * 1000,
    flSpeed: 79.6 * 1000,
    frSpeed: 79.6 * 1000,
    rlSpeed: 81.74 * 1000,
    rrSpeed: 81.2 * 1000 
}; 

var data = [
    sampleData.unixEpoch, sampleData.msTimer, sampleData.steeringAngle, sampleData.batteryTemperature, sampleData.batteryVoltage, sampleData.motorSpeed, sampleData.gear, sampleData.waterTemperature,
    sampleData.lat, sampleData.long, sampleData.xAccelerometer, sampleData.yAccelerometer, sampleData.zAccelerometer, sampleData.xGyro, sampleData.yGyro, sampleData.zGyro, 
    sampleData.flSuspension, sampleData.frSuspension, sampleData.rlSuspension, sampleData.rrSuspension, sampleData.flSpeed, sampleData.frSpeed, sampleData.rlSpeed, sampleData.rrSpeed
]

var send = new Int32Array(data);

const buf = Buffer.from(send.buffer);

console.log(`Buffer length: ${buf.length}`)
client.send(buf, 8080, "127.0.0.1", (err) => { 
    if(err) {
        console.log(err); 
    }
    client.close(); 
}); 

// const unixEpoch = Date.parse('23 Feb 2020 10:23:00 GMT');
// console.log(unixEpoch / 1000);
// var d = new Date(unixEpoch * 1000);
// console.log(unixEpoch);
// 1582525962
// 659 ms 
// Your time zone: Sunday, February 23, 2020 10:32:42 PM GMT-08:00
// 2/24/2020, 12:01:55 P
// 1582574515
// 977 ms 
// var actual = [
//     1582574515, 659, 159 * 1000, 23 * 1000, 70 * 1000, 65* 1000, 3, 50, 
//     34.2418 * 1000, -118.5289 * 1000, 20 * 1000, 30 * 1000, 40 * 1000, 13 * 1000, 8 * 1000, 2 * 1000, 
//     33 * 1000, 23 * 1000, 41 * 1000, 9 * 1000, 79.6 * 1000, 79.6 * 1000, 81.74 * 1000, 81.2 * 1000 
// ]
// var actual = [
//     1582525962, 659, 159 * 1000, 23 * 1000, 70 * 1000, 65* 1000, 3, 50, 
//     34.2418 * 1000, -118.5289 * 1000, 20 * 1000, 30 * 1000, 40 * 1000, 13 * 1000, 8 * 1000, 2 * 1000, 
//     33 * 1000, 23 * 1000, 41 * 1000, 9 * 1000, 79.6 * 1000, 79.6 * 1000, 81.74 * 1000, 81.2 * 1000 
// ]
// console.log(actual[2]);
