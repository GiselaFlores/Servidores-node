const http = require('http');
//PORT = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        //"content-type": 'text/plain'
        "content-type": 'text/html; charset=UTF-8'
    });

    //res.end("hola mundo node");
    res.end("<h1>Hola como estan?</h1><p>Texto extra</p>");
});

server.listen(3000, ()=> console.log("servidor conectado en puerto 3000"));