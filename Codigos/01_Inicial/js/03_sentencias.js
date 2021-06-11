/*//if

let nota=10;

if (nota<0 || nota>10) {
    alert("La nota introducida no es válida");
} else if(nota>5){
    if(nota<7){
        alert("Bien");
    }else if(nota<9){
        alert("Notable")
    }else if(nota<10){
        alert("Sobresaliente")
    }else{
        alert("Matrícula")
    }
}else{
    alert("Suspenso")
}
*/

/*
//if ternario
//condicion ? condicion_true: condicion_false
let nota=6;

nota>=5 ? alert("aprobado"):alert("suspenso")
*/

/*
//while

let nota=2; 

while(nota<10){
    alert(`La nota es ${nota}`);
    nota++;
}

//pedir un número por teclado, generar un aleatorio y tratar de adivinarlo, cuando se acierte aparece un alert con el num de intentos.

let numAleatorio=Math.random()*10;
numAleatorio=Math.round(numAleatorio);
let numIntroducido=-1;
let numIntentos=0;

while(numIntroducido!=numAleatorio){

    numIntroducido=Number(prompt("Introduzca el número"));
    numIntentos++;

}

alert(`Ha ganado en ${numIntentos} intentos`)
*/

/*
//for

let coleccionPalabras= ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

(let index = 0; index < coleccionPalabras.length; index++) {
    console.log(`Ejecución ${coleccionPalabras[index]}`)
    console.log(`\t${typeof coleccionPalabras[index]}`)
}

coleccionPalabras.forEach((element, index, array) => {
    console.log(index)
    console.log(`\t${element}`);
    console.log(`\t\t${typeof element}`);
    console.log(`\t\t\t${array}`)
})

//forin

for (const key in coleccionPalabras) {
    console.log(`${key}`)
    console.log(`${coleccionPalabras[key]}`);
}

//forof. Foreach de java.

for (const iterator of coleccionPalabras) {
    console.log(iterator)
}*/

/*
//Switch

let opcion = prompt("Indica la opción");
if (!isNaN(opcion)) {
  switch (opcion) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    default:

      break;
  }
}else{
    console.log("Valor no númerico");
}
*/

//confirmación

let confirmacion=confirm("Estás seguro de querer continuar?")

if(confirmacion){
    alert("Términos aceptados")
}else{
    alert("Proceso cancelado")
}
