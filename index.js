let nombreCliente = prompt("Buenos dias ingrese su nombre para una mejor experiencia")
alert(`Bienvenido ${nombreCliente} este es nuestro menu`)
let compra = parseInt(prompt("1. vianda vegana \n2. vianda vegetariana \n3. vianda baja en calorias \n4. vianda celiaca \n5. vianda sin tacc \n colocar el numero correspondiente a la vianda"))

const baseDeDatos =[
vianda1 = {
id:1,
nombre:"vegana",
precio : 100,
},
vianda2 = {
id:2,
nombre:"vegetariana",
precio : 150,
},
vianda3 = {
id:3,
nombre:"baja en calorias",
precio : 200,
},
vianda4 = {
id:4,
nombre:"celiaca",
precio : 250,
},
vianda5 = {
id:4,
nombre:"sin tacc",
precio : 300,
},
];

let total = 0;
let carrito = [];
console.log(carrito)

function aniadirAlCarrito(producto){

 carrito.push(producto);
}
aniadirAlCarrito(vianda1);
aniadirAlCarrito(vianda2);
aniadirAlCarrito(vianda3);

function calcularTotal(){
for (let i = 0; i <carrito.length; i++){
    total=total + carrito[i].precio
}
console.log(total.toFixed(2))
}

calcularTotal()

console.log(carrito)