console.table(productos);
const carro = [];
let contenedorProds = document.getElementById('misprods');
let tablaBody = document.getElementById("tablabody");
let cantidad = document.getElementById("cantidad");
let prodCarrito = JSON.parse(localStorage.getItem('productos-en-carrito')) || []; 


function renderizarProductos(listaProds) {
    contenedorProds.innerHTML = '';
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `
        <div class="card stylecard" style="width: 18rem;">
  <img src="${prod.foto}" class="card-img-top" alt="imagen">
  <div class="card-body">
    <h5 class="card-title">${prod.nombre}</h5>
    <p class="card-text">Precio: $${prod.precio}</p>
    <button id=${prod.id} class="btn btn-primary compra">Comprar</a>
  </div>
</div>
        `;
    }

    let botones = document.getElementsByClassName("compra");
    for (const boton of botones) {

        boton.onmouseover = () => boton.classList.replace("btn-primary", "btn-warning");
        boton.onmouseout = () => boton.classList.replace("btn-warning", "btn-primary")
    }
}

renderizarProductos(productos);

document.getElementById("boton-ingresar").addEventListener("click",ingresar)
function ingresar(){
    let usuario = document.getElementById("usuario").value;

    if (usuario === ""){
        alert("No ha ingresado un nombre")
        return;
    }else
    {
        localStorage.getItem(usuario)
    }
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch ("data.json");
  const data = await response.json();

};
getProducts();