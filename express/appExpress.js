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

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
})

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});