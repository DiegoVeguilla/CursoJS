/*alert("Hola mundo");
alert("5*5");
alert(5*5)*/

const NOMBRE = "Diego";
let numero = "1";
let numeroCorrecto = Number(numero);

let suma = numero + numero;
let sumaOK = numeroCorrecto + numeroCorrecto;
console.log(suma);
console.log(sumaOK);
console.log(typeof suma);
console.log(typeof sumaOK);

/*let lado1=prompt("Introduzca el valor del primer lado");
let lado2=prompt("Introduzca el valor del segundo lado");
let lado3=prompt("Introduzca el valor del tercer lado");
let lado4=prompt("Introduzca el valor del cuarto lado");

if(lado1==lado2 && lado2==lado3 && lado3==lado4){
    let area=(Number(lado1)*Number(lado2));
    console.log(area);
}else{
    console.log("Aprende a hacer cubos")
}*/

/*let numComprobar=prompt("Introduzca un número")

if(numComprobar%2==0){
    console.log("Par")
}else{
    console.log("Impar")
}*/

/*let nombre=prompt("Introduzca un nombre");
let letra=prompt("Introduzca una letra");

for (let index = 0; index < nombre.length; index++) {
   
    if(nombre.charAt(index)==letra){
        console.log(`Letra encontrada. La palabra tiene ${nombre.length} letras`)
        break;
    }
    
}*/

/*let num1 = prompt("Introduzca el primer num");
let num2 = prompt("Introduzca el segundo num");

if (num1 > 0 && !isNaN(num1) && num2 > 0 && !isNaN(num2)) {
  if (num1 > num2) {
    console.log(`${num1} > ${num2}`);
  } else {
    console.log(`${num2} > ${num1}`);
  }
}*/

console.log(moment().format("LLLL"));

let fechaActual = new Date();
let fechaRestar = new Date(2020, 0, 1);

let diasPasados = (fechaActual.getTime() - fechaRestar.getTime()) / 86400000;

console.log(Math.round(diasPasados));

/*let num=prompt("introduzca un número")

if(num>0){
    for (let index = num; index > 0; index--) {
        console.log(index)
    }
}else{
    alert("El número debe ser positivo")
}*/

/*let seguir = false;
let parar=false;

do {
  let num1 = prompt("Introduzca el primer número");
  let num2 = prompt("Introduzca el segundo número");

  if (num1 > 0 && !isNaN(num1) && num2 > 0 && !isNaN(num2)) {

    num1 = Number(num1);
    num2 = Number(num2);

    let suma=alert(num1 + num2);
    let resta=alert(num1 - num2);
    let multi =alert(num1 * num2);
    let div=alert(num1 / num2);

    if(suma<0 || resta<0 || multi<0 || div<0){
        parar=false;
    }else{
        seguir=confirm("¿Desea continuar?")
    }

  } else {
    alert("Dato incorrecto");
  }
} while (seguir && parar);*/

/*let num1 = prompt("Introduzca el primer número");
let num2 = prompt("Introduzca el segundo número");

if (num1 > 0 && !isNaN(num1) && num2 > 0 && !isNaN(num2)) {
  if (num1 > num2) {
    for (let index = num1; index >= num2; index--) {
      console.log(index);
    }
  } else {
    for (let index = num2; index >= num1; index--) {
        console.log(index);
      }
  }
} else {
  console.log("Datos inválidos");
}*/

/*let num1 = prompt("Introduzca el número");

if (num1 > 0 && !isNaN(num1)) {
  for (let index = num1; index >=0; index--) {
      console.log(index)
  }
} else {
  console.log("Datos inválidos");
}*/

/*let frase = prompt("Introduzca una frase")

if(frase.length>10){
  let palabras=(frase.replace(".", " ").replace(",", " ").split(" "));

  let contador=0;
  let letras=palabras.forEach((item) => {
    contador+=item.length;
  })

  let frases=frase.split(".").length;

  console.log(palabras)
  console.log(letras)
}else{
  let frase = prompt("Introduzca una frase");
}*/

let cartas = [
  "1t",
  "2t",
  "3t",
  "4t",
  "5t",
  "6t",
  "7t",
  "8t",
  "9t",
  "10t",
  "Jt",
  "Qt",
  "Kt",
  "1d",
  "2d",
  "3d",
  "4d",
  "5d",
  "6d",
  "7d",
  "8d",
  "9d",
  "10d",
  "Jd",
  "Qd",
  "Kd",
  "1c",
  "2c",
  "3c",
  "4c",
  "5c",
  "6c",
  "7c",
  "8c",
  "9c",
  "10c",
  "Jc",
  "Qc",
  "Kc",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p",
  "6p",
  "7p",
  "8p",
  "9p",
  "10p",
  "Jp",
  "Qp",
  "Kp"
];

/*let cartasBarajadas = [];

for (let index = 0; index < 52; index++) {

  let cartaAleatoria = Math.round(Math.random() * (cartas.length - 1));

  cartasBarajadas.push(cartas[cartaAleatoria]);

  cartas = cartas.filter(function (item) {
    return item != cartas[cartaAleatoria];
  });
  
}

console.log(cartasBarajadas);*/

cartas=_.shuffle(cartas)

console.log(cartas);


