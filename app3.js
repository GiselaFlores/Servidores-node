//servidor basico http

const http = require('http');
const port = 3000;

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hola mundo node');
});

server.listen(port, ()=> console.log(`Servidor corriendo en puerto: ${port}`));