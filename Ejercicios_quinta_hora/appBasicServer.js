const http = require('http');

const servidor = http.createServer((req, res) => {
    // Poceso
    console.log('Solicitud nueva');
    res.end('Hello, world');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});