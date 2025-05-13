const express = require('express');

const app = express();

const {infoCursos} = require('./cursos.js');

//Routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express. Cursos.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

// Programación 

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if (req.query.ordenar == 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
    }

    console.log(req.query.ordenar);

    res.send(JSON.stringify(resultados));
});

// Trabajando con dos parametros
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel == nivel);
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});

// Matematicas

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
})

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados =infoCursos.matematicas.filter(curso => curso.tema == tema);
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);      
    }
    res.send(JSON.stringify(resultados));
})

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});