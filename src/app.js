// libraries 
// const express = require('express'); // express 
const dgram = require('dgram');  // udp 
const PORT = process.env.PORT || 8080; 
const HOST = process.env.HOST;  

// const app = express(); 
const udp = dgram.createSocket('udp4');

// models and db store 
const store = require('./store.js');
const models = require('./models');


// create database tables if not already created 
models.sequelize.sync().then(() => {
    console.log("db and tables created");
})

//------------------------------------------------------------------------------------------------------------------//
// UDP 
// receive datagram (packet) 
// store in db 
udp.on('message', (msg, rinfo) => {
    console.log(`Datagram received from ${rinfo.address}:${rinfo.port}`);
    
    var data = { 
        convertedTime: new Date(msg.readInt32LE(0) * 1000),
        unixEpoch: msg.readInt32LE(0),
        msTimer: msg.readInt32LE(4),
        steeringAngle: msg.readInt32LE(8) / 1000,
        batteryTemperature: msg.readInt32LE(12) / 1000,
        batteryVoltage: msg.readInt32LE(16) / 1000,
        motorSpeed: msg.readInt32LE(20) / 1000,
        gear:  msg.readInt32LE(24), // probably not gonna be used 
        waterTemperature:  msg.readInt32LE(28), 
        latitude:  msg.readInt32LE(32) / 10000, 
        longitude:  msg.readInt32LE(36) / 10000,
        xAccelerometer:  msg.readInt32LE(40) / 1000,
        yAccelerometer:  msg.readInt32LE(44) / 1000,
        zAccelerometer:  msg.readInt32LE(48) / 1000,
        xGyro:  msg.readInt32LE(52) / 1000,
        yGyro:  msg.readInt32LE(56) / 1000,
        zGyro:  msg.readInt32LE(60) / 1000,
        flSuspension:  msg.readInt32LE(64) / 1000,
        frSuspension:  msg.readInt32LE(68) / 1000,
        rlSuspension:  msg.readInt32LE(72) / 1000,
        rrSuspension:  msg.readInt32LE(76) / 1000,
        flSpeed:  msg.readInt32LE(80) / 1000,
        frSpeed:  msg.readInt32LE(84) / 1000,
        rlSpeed:  msg.readInt32LE(88) / 1000,
        rrSpeed:  msg.readInt32LE(92) / 1000
    };

    // store.test(data);

    store.store(data); 
});

udp.on('error', (err) => {
    console.log(`server error: \n${err.stack}`);
    udp.close();
});

udp.on('listening', () => {
    const address = udp.address();
    console.log(`UDP server listening on ${address.address}:${address.port}`);
});

udp.bind(PORT, HOST);


//------------------------------------------------------------------------------------------------------------------//
// app.get('/', (req, res) => {
//     // res.json({
//     //     bytes: data
//     // });
//     res.send("Hello World");
// });
// - "8080:8080/tcp"

// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
