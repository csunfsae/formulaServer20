// libraries 
const express = require('express');
const dgram = require('dgram'); 
// var models = require("./models");

const PORT = process.env.PORT || 8080; 
const HOST = "127.0.0.1";  //localhost

// app 
const app = express(); 

// create udp server 
const server = dgram.createSocket('udp4');


//------------------------------------------------------------------------------------------------------------------//

app.get('/', (req, res) => {
    res.send("Hello World");
});



// this will be to call api routing 
// api routing will call the io 
// app.use('/', apiRouter.router);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


//------------------------------------------------------------------------------------------------------------------//
// UDP 

// throws an error if there is one 
server.on('error', (err) => {
    console.log(`server error: \n$(err.stack}`);
    server.close();
});

//The 'message' event is emitted when a new datagram is available on a socket. The event handler function is passed two arguments: msg and rinfo.
server.on('message', (msg, rinfo) => {
    console.log(`Packets received from client : ${msg.toString()}`);
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

//The 'listening' event is emitted whenever a socket begins listening for datagram messages. This occurs as soon as UDP sockets are created.
// ready to receive data 
server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

// app.set('port', 8000);
// if HOST is ommitted, it will be listening on 0.0.0.0
server.bind(8080, HOST);