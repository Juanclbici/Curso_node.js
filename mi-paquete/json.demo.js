const  curso = require('./curso.json');
console.log(curso.temas);
//Objeto
let infoCurso = {   
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "nomLikes": 21123,
    "temas": [
        "JavaScrip",
        "Node.js"
    ],
    "esPublico": true
};
//Transformar objeto a cadena de caracter en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);
console.log(infoCursoJson);
console.log(typeof infoCursoJson);

console.log(infoCursoJson.titulo);

// Cadena de caracteres para convertirlo a objeto

let infoCursoJsonObjeto = JSON.parse(infoCursoJson);
console.log(infoCursoJsonObjeto);
console.log(typeof infoCursoJsonObjeto);

console.log(infoCursoJsonObjeto.titulo);