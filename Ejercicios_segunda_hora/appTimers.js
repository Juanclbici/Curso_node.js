function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
//Tiempo real
mostrarTema('Node.js tiempo real');
//retardo
setTimeout(mostrarTema, 2000, 'Node.js 2 segundos');
setTimeout(mostrarTema, 4000, 'Node.js 4 segundos');
setTimeout(mostrarTema, 6000, 'Node.js 6 segundos');

function sumar (a, b){
    console.log(a+b);
}
setTimeout(sumar, 7000, 5, 6);

//setImediate
console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.js inmediato');
console.log('Despues de setImmediate()');

//set interval()
setInterval(mostrarTema, 1500, 'Node,js interval');
setInterval(sumar, 1500, 5, 2);