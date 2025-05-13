const express = require('express');
const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos;

routerMatematicas.get('/', (req, res) => {
    res.json(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema == tema);
    if(resultados.length === 0) {
        return res.status(404).json(`No se encontraron cursos de ${tema}`);      
    }
    res.json(resultados);
});

module.exports = routerMatematicas;