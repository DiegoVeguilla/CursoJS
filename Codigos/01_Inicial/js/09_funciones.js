/*function funcionNormal(){
    console.log("Ejecución normal");
}

function funcionParametros(parametroUno, parametroDos){
    console.log(`${parametroUno} ${parametroDos}`);
}

function parametrosDefecto(parametroUno, parametroDos="dos") {
    console.log(parametroUno+" "+parametroDos);
}

let funcionSuma=function (numeroUno, numeroDos) {
    console.log(`${numeroUno+numeroDos}`);
}

let funcionDivision = (numeroUno, numeroDos)=>console.log(`${numeroUno/numeroDos}`);*/

function mostrarMensaje(parametro) {
    console.log("Esto muestra mensaje de "+parametro);
}

function funcionCompleta(funcion, nombre) {
    mostrarMensaje(nombre);
}



/*funcionNormal();
funcionParametros(2, 5);
parametrosDefecto(1);
funcionSuma(1, 6);
funcionDivision(4,2);*/

funcionCompleta((nombre)=>{
    console.log("Esta es una función que ejecuta un mensaje de "+nombre);
}, "Die");


