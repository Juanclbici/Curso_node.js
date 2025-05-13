const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('===> req (solicitud)');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log('===> res (respuesta)');
    console.log(res.statusCode);
    res.end('Hello, world');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escucahndo en el puerto ${puerto}...`);
});