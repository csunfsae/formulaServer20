// libraries 
const express = require('express'); // express 
const dgram = require('dgram');  // udp 
const socketio = require('socket.io'); // socket io 
const PORT = process.env.PORT || 8080; 
const HOST = "127.0.0.1";  //localhost

// app 
const app = express(); 
// create udp server 
const udp = dgram.createSocket('udp4');
// sequelize export 
// const db = require('./db.js');

// models
const models = require('./models');
var values = []
//------------------------------------------------------------------------------------------------------------------//
app.get('/', (req, res) => {
    res.json({
        bytes: values
    });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//------------------------------------------------------------------------------------------------------------------//

// create database tables if not already created 
models.sequelize.sync().then(() => {
    console.log("db and tables created");
})

//------------------------------------------------------------------------------------------------------------------//
// UDP 



// The 'message' event is emitted when a new datagram is available on a socket. The event handler function is passed two arguments: msg and rinfo.
udp.on('message', (msg, rinfo) => {
    console.log(msg.toString("hex")); // read entire 32 bit unsigned integer
    // read by 4 bytes 
    for (i = 0; i < msg.length; i+=4) {
        k = msg.readUInt32BE(i).toString(16);
        console.log(k);
        values.push(k)
    }
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

udp.on('error', (err) => {
    console.log(`server error: \n$(err.stack}`);
    udp.close();
});

udp.on('listening', () => {
    const address = udp.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

// app.set('port', 8000);
// if HOST is ommitted, it will be listening on 0.0.0.0
udp.bind(41234, HOST);
// server.listen(8000);
