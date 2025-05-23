const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos.js');

// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

//Routing
app.get('/', (req, res) => {
    res.json('Mi primer servidor con Express. Cursos.');
});

app.get('/api/cursos', (req, res) => {
    res.json(infoCursos);
});


const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});