// libraries 
const express = require('express'); // express 
const dgram = require('dgram');  // udp 
const PORT = process.env.PORT || 8080; 
const HOST = process.env.HOST;  

const app = express(); 
const udp = dgram.createSocket('udp4');

const store = require('./store.js');

// models
// const models = require('./models');

// array of bytes 
var bytes = []
//------------------------------------------------------------------------------------------------------------------//
app.get('/', (req, res) => {
    res.json({
        bytes: bytes
    });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//------------------------------------------------------------------------------------------------------------------//

// create database tables if not already created 
// models.sequelize.sync().then(() => {
//     console.log("db and tables created");
// })

//------------------------------------------------------------------------------------------------------------------//
// UDP 
// receive datagram (packet) 
// bitwise shift by (4 bytes)
// divide by 100 if needed 
// store in db 
udp.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    console.log(msg.toJSON());
    console.log(`Buffer length: ${msg.length}`)

    i = 0;
    while(i < 96) {
        console.log(((msg[i] ) | (msg[i + 1] << 8) | (msg[i + 2] << 16) | (msg[i + 3] << 24)))
        i+=4;
    }

    // store.test(msg);

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