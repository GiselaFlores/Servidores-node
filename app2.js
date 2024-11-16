const http = require('http');
const fs = require('fs');
//PORT = 3000;

const server = http.createServer((req, res)=>{

    const file = fs.readFileSync(__dirname + '/index.html');

    res.writeHead(200, {
        //"content-type": 'text/plain'
        "Content-type": 'text/html; charset=UTF-8'
    });

    //res.end("hola mundo node");
    res.end(file);
});

server.listen(3000, ()=> console.log("servidor conectado en puerto 3000"));