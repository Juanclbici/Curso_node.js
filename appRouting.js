const http = require('http');
const cusros = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            console.log(`El metodo no puede ser manejado por el servidor: ${method} `);
    }

});
function manejarSolicitudGET(req, res ) {
    const path = req.url;

    if (path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if (path === '/api/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cusros.infoCursos));
    } else if (path === '/api/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cusros.infoCursos.programacion));
    } else if (path == '/api/cursos/matematicas') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cusros.infoCursos.matematicas));
    }
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if (path === '/api/cursos/programacion') {
        res.statusCode = 200;
        return res.end('El servidor recibio una solicitud POST para /cursos/programacion');

    }
}

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escucahndo en ele puerto ${puerto}`);
});