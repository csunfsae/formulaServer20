// libraries 
const express = require('express'); // express 
const dgram = require('dgram');  // udp 
const PORT = process.env.PORT || 8080; 
const HOST = process.env.HOST;  

const app = express(); 
const udp = dgram.createSocket('udp4');

const store = require('./store.js');

// models
const models = require('./models');

// array of bytes 
// var data = []

//------------------------------------------------------------------------------------------------------------------//
app.get('/', (req, res) => {
    // res.json({
    //     bytes: data
    // });
    res.send("Hello World");
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//------------------------------------------------------------------------------------------------------------------//

// create database tables if not already created 
models.sequelize.sync().then(() => {
    console.log("db and tables created");
})

//------------------------------------------------------------------------------------------------------------------//
// UDP 
// receive datagram (packet) 
// bitwise shift by (4 bytes)
// divide by 100 if needed 
// store in db 
udp.on('message', (msg, rinfo) => {
    console.log(`Datagram received from ${rinfo.address}:${rinfo.port}`);

    var data = { 
        unixEpoch: ((msg[0] ) | (msg[1] << 8) | (msg[2] << 16) | (msg[3] << 24)),
        time: (((msg[4] ) | (msg[5] << 8) | (msg[6] << 16) | (msg[7] << 24))),
        steeringAngle: ((msg[8] ) | (msg[9] << 8) | (msg[10] << 16) | (msg[11] << 24)),
        batteryTemperature: ((msg[12] ) | (msg[13] << 8) | (msg[14] << 16) | (msg[15] << 24)),
        batteryVoltage: ((msg[16] ) | (msg[17] << 8) | (msg[18] << 16) | (msg[19] << 24)),
        motorSpeed: ((msg[20] ) | (msg[21] << 8) | (msg[22] << 16) | (msg[23] << 24)),
        gear: ((msg[24] ) | (msg[25] << 8) | (msg[26] << 16) | (msg[27] << 24)),
        padding: ((msg[28] ) | (msg[29] << 8) | (msg[30] << 16) | (msg[31] << 24)),
        lat: ((msg[32] ) | (msg[33] << 8) | (msg[34] << 16) | (msg[35] << 24)), 
        long: ((msg[36] ) | (msg[37] << 8) | (msg[38] << 16) | (msg[39] << 24)),
        xAccelerator: ((msg[40] ) | (msg[41] << 8) | (msg[42] << 16) | (msg[43] << 24)),
        yAccelerator: ((msg[44] ) | (msg[45] << 8) | (msg[46] << 16) | (msg[47] << 24)), 
        zAccelerator: ((msg[48] ) | (msg[49] << 8) | (msg[50] << 16) | (msg[51] << 24)),
        xGyro: ((msg[52] ) | (msg[53] << 8) | (msg[54] << 16) | (msg[55] << 24)),
        yGyro: ((msg[56] ) | (msg[57] << 8) | (msg[58] << 16) | (msg[59] << 24)),
        zGyro: ((msg[60] ) | (msg[61] << 8) | (msg[62] << 16) | (msg[63] << 24)),
        flSuspension: ((msg[64] ) | (msg[65] << 8) | (msg[66] << 16) | (msg[67] << 24)),
        frSuspension: ((msg[68] ) | (msg[69] << 8) | (msg[70] << 16) | (msg[71] << 24)), 
        rlSuspension: ((msg[72] ) | (msg[73] << 8) | (msg[74] << 16) | (msg[75] << 24)),
        rrSuspension: ((msg[76] ) | (msg[77] << 8) | (msg[78] << 16) | (msg[79] << 24)), 
        flSpeed: ((msg[80] ) | (msg[81] << 8) | (msg[82] << 16) | (msg[83] << 24)),
        frSpeed: ((msg[84] ) | (msg[85] << 8) | (msg[86] << 16) | (msg[87] << 24)),
        rlSpeed: ((msg[88] ) | (msg[89] << 8) | (msg[90] << 16) | (msg[91] << 24)),
        rrSpeed: ((msg[92] ) | (msg[93] << 8) | (msg[94] << 16) | (msg[95] << 24))
    };

    // console.log(dict.unixEpoch + " " + dict.time + " " + dict.steeringAngle + " " + dict.batteryTemperature + " " + dict.batteryVoltage + " " + dict.motorSpeed
    // + " " + dict.gear + " " + dict.padding + " " + dict.lat + " " + dict.long + " " + dict.xAccelerator + " " + dict.yAccelerator + " " + dict.zAccelerator
    // + " " + dict.zGyro + " " + dict.yGyro + " " + dict.zGyro + " " + dict.flSuspension + " " +dict.frSuspension + " " +dict.rlSuspension + " " + dict.rrSuspension
    // + " " + dict.flSpeed + " " + dict.frSpeed + " " + dict.rlSpeed + " " + dict.rrSpeed)

    // store.test(dict);

    store.store(data); 
});

udp.on('error', (err) => {
    console.log(`server error: \n$(err.stack}`);
    udp.close();
});

udp.on('listening', () => {
    const address = udp.address();
    console.log(`UDP server listening on ${address.address}:${address.port}`);
});

udp.bind(PORT, HOST);