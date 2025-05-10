function saludar(nombre){
    return `Hola, ${nombre}`;
}

function saludarHolaMundo(){
    return '¡Hola, Mundo!';
}
//console.log(module.exports);

//Primera forma para exportar elementos
//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;

//Nueva alternativa para exportar a los elemntos equivalente a la primera forma mediante un objeto
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};
//console.log(module.exports);