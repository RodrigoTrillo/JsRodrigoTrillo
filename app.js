let respuesta = "buenos aires";
let info = false;

for (let contador = 0; contador <3; contador++){
    let respuestaUsuario = prompt("Ingresa la capital de argentina");
    if( respuestaUsuario === respuesta){
        let info = true;
        alert("Genial, has acertado");
        break
    }
    if (respuestaUsuario !==respuesta){
        alert("Lo siento esa no es la capital, Vuelve a intenrarlo");
        break
    }
}
