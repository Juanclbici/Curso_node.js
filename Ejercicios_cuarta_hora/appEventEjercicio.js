const estatusPedido = () => {
    return Math.random() < 0.8;
};

/*
for (let i = 0; i < 10; i++) {
    console.log(estatusPedido());
}*/

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza está en camino.');
        } else {
            reject('Ocurrio un error. Por favoe intente nuevamente.');
        }
    }, 3000);
});

//Forma simple 
/*
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarpedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};
miPedidoDePizza.then(manejarPedido, rechazarpedido);
*/
//Forma optimizada

miPedidoDePizza
.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
.then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
});