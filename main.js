
class Producto{
    constructor(marca, precio, swich){
        this.marca = marca;
        this.precio= precio;
        this.swich= swich;
    }
}

let precios = [
    {marca: "Redragon",precio:"20000"},
    {marca: "Logitech",precio:"22000"},
    {marca: "Razer",precio:"18000"},
];

function cargarProducto(arrayProductos){
    let marca = prompt("ingrese la marca del teclado que desea");
    let precio = parseInt(prompt("ingrese el precio"));
    let swich = prompt("Eliga el Switch \n Rojo \n Azul \n Verde");
    const  nuevoProducto = new Producto(marca, precio, swich);
    arrayProductos.push(nuevoProducto);
    console.log("producto añadido al carrito");
}

function mostrarProductos(){
    arrayProductos.forEach((producto)=>{
        alert(`usted eligio el Teclado ${producto.marca} por un precio de ${producto.precio} con el switch ${producto.swich}`)
    })
}

function finalizarCompra(){
    const total = arrayProductos.reduce ((acc, el)=> acc + el.precio, 0);
    alert (`gracias por su compra! el total a pagar es de ${total}`);
    

}

function mostrarOferta(){
    const ofertas = precios.filter((el) => el.precio < 20000);
    for ( const oferta of ofertas){
        alert(
            "La oferta de hoy es : Teclado" +" " +
            oferta.marca +" "+
            "a un valor de $"+
            oferta.precio
        );
    }
}

let arrayProductos = [];

let opcion = prompt(
    " Ingrese una opcion: \n 1: Elegir teclado \n 3: Finalizar compra \n 4: Sugerir oferta \n 5: Salir"
);

while ( opcion !== "5"){
    if (opcion === "1"){
        cargarProducto(arrayProductos);
    }
    if (opcion === "2"){
        mostrarProductos(arrayProductos);
    }
    if (opcion === "3"){
        finalizarCompra(arrayProductos);
    }
    if (opcion === "4"){
        mostrarOferta(arrayProductos);
    }
    opcion = prompt (
        "Vuelva a ingresar una opcion: \n 1: Seguir comprando \n 2: Mostrar carrito  \n 3: Finalizar compra \n 4: Sugerir oferta \n 5: Salir"
    );
}
Swal.fire('Muchas gracias por comprar en PerifericosCba, Vuelva Prontos!')
