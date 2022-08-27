
// funciones


// funcion saludar 


function saludo() {
    alert("Bienvenido a PerifericosCba" +" "+ nombre + " escoja una opcion a continuacion"
    );
}

function compraProducto() {
    producto = prompt("Elija un producto \n 1: Auriculares \n 2: Teclados \n 3: Mouse");

    if (producto === "1") {
        alert("Elejiste Auriculares")
    } else if ( producto === "2") {
        alert("Elejiste Teclados")
    } else if (producto === "3"){
        alert("Elejiste Mouse")
    }
    opcion = prompt("Elija que hacer a continuacion \n 2: Mostrar precio \n 3:Terminar");
}


function finCompra(){
    if (producto === "1"){
        alert(` Auriculares tiene un precio de ${auriPrecio}`)
    } else if (producto === "2"){
        alert(`Teclados tiene un precio de ${tecladoPrecio}`)
    } else if (producto=== "3"){
        alert(`Mouse tiene un precio de ${mousePrecio}`)
    }

}

// variables y programa 

let nombre = prompt("Porfavor ingrese su nombre")
saludo()

let producto;
let auriPrecio = "$8000";
let tecladoPrecio = "$5000";
let mousePrecio = "$4000";

let opcion = prompt ("Ingrese la opcion que corresponda \n 1: Comprar perifericos \n 2: Finalizar la compra \n 3: Terminar");

while(opcion !== "3"){
    if (opcion === "1"){
        compraProducto();
    }
    if(opcion === "2"){
        finCompra();
        opcion= "3";
    }
}

alert("Gracias por comprar en PerifericosCba")