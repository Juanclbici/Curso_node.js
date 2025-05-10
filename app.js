//sintaxis
//const saludos = require('./saludos.js');
//sintaxis de desestructuración
const { saludar, saludarHolaMundo } = require('./saludos.js');

//console.log(saludo);



//Se usan en la primera sintaxis 
//console.log(saludos.saludar('freeCodeCamp'));
//console.log(saludo.saludarHolaMundo());

//Sintaxis de desestructuración
console.log(saludarHolaMundo());
console.log(saludar( 'freeCodeCamp'));