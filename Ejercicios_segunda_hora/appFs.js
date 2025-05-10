const fs = require('fs');
//Leer un archivo
console.log('Antes de leer el archivo');
fs.readFile('index.html', 'utf-8', (err, contenido) =>{
    if (err){
        console.log(err);
    }else {
        console.log(contenido);
    }

});
console.log('Despúes de leer el archivo');

//Cambiar el nombre de un archivo
fs.rename('index.html', 'main.html', (err) =>{
    if(err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente...');

});
console.log('Despues de cambiar el nombre');

// agregar contendiof al final de un archivo.
fs.appendFile('main.html', '<p>Hola</p>', (err)=> {
    if(err){
        throw err;
    }
    console.log('Archivo actualizado....');

});
console.log('Despues de agregar contenido al archivo....')

//Reemplazar todo el contenido del archivo
fs.writeFile('main.html', 'Contenido nuevo', (err)=> {
    if(err){
        throw err;
    }
    console.log('Contenido reemplazado exitosamente...');

});
console.log('despues de reemplazar el contenido del archivo');

// Eliminar archivos
fs.unlink('main.html', (err) => {
    if (err){
        throw err;
    }
    console.log('Archivo eliminado...');
});
console.log('Despues de eliminar el archivo...');

