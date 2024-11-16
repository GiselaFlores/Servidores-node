//servidor webSocket

const webSocket = require('ws');
const port = 3000;

const server = new WebSocket.server({port}); //port:8080

server.on('connection', socket => {
    console.log("conección con el cliente");
    socket.on("message", message =>{
        console.log(`recibido: ${message}`);
        socket.send(`realizado ${message}`);
    });

    socket.on('close', ()=>{
        console.log("servidor desconectado");
    });
})

console.log(`Servidor websocket esta corriendo en ws, puerto: ${port}`);