var dgram = require('dgram');
var client = dgram.createSocket('udp4');

// javascript uses milliseconds
// unix epoch uses seconds
// converted to seconds 
var secondsUnix = Math.round((new Date()).getTime() / 1000);
var msUnix = Math.round((new Date().getMilliseconds()) );
// var both = Math.round((new Date()).getTime());
console.log(secondsUnix);
console.log(msUnix);
// console.log(both);
// console.log(currentUnix / 1000);

// 1582574515
// 1582672242
//659 
var sampleData = {
    unixEpoch: 1585631919,
    msTimer: msUnix,
    steeringAngle: 159 * 1000,
    batteryTemperature: 23 * 1000,
    batteryVoltage: 70 * 1000, 
    motorSpeed: 65* 1000, 
    gear: 0,
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
client.send(buf, 8080, "localhost", (err) => { 
    if(err) {
        console.log(err); 
    }
    client.close(); 
}); 


//127.0.0.1