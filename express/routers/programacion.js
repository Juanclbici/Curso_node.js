const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos.js').infoCursos;

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
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
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel == nivel);
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;