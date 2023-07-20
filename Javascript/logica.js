console.table(productos);

function filtrarPorPrecio(precioMax) {
    const filtrados = productos.filter((producto) => producto.precio <= precioMax);
    console.table(filtrados);
}

let precioUsuario = parseFloat(prompt("Ingresa el precio maximo que puedes abonar (0- Salir)"));

do{
    
    if (isNaN(precioUsuario) || precioUsuario < 0) {
        alert("Ingrese un numero valido 😒");
    } else {
        const prodsFiltrados = filtrarPorPrecio(precioUsuario);
        console.table(prodsFiltrados);
    }
    precioUsuario = parseFloat(prompt("Ingresa el precio maximo que puedes abonar"));

} while (precioUsuario != 0);