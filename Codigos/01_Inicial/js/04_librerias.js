//Date
let fechaActual=new Date();
console.log(fechaActual.getDate()); //dia del mes
console.log(fechaActual.getDay()); // dia de la semana
console.log(fechaActual.getMonth()+1); // mes   
console.log(fechaActual.getFullYear()); // año   
console.log(fechaActual.getHours()); // hora
console.log(fechaActual.getMinutes()); // minuto
console.log(fechaActual.getSeconds()); // segundo
console.log(fechaActual.getMilliseconds()); // milisegundo
console.log(fechaActual.getTime()); // timestamp

fechaActual.setFullYear(2020);

let fechaPasada= new Date(2010, 5, 8);
console.log(fechaPasada.getDate());

//Fechas con moment
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().subtract(6, 'days').calendar())

//trabajar con Strings
let frase = "              Hola esto es un ejemplo de frase para tratarla con js";
frase=(frase.trim()); //Elimina los espacios del principio
console.log(frase.substring(0, 14)); //Saca lo que esté entre los carácteres que he indicado
console.log(frase.substr(8,10)); //Saca desde mi inicio sumando lo que indique
console.log(frase.sub()); //???
console.log(frase.startsWith("H", 0)); //Preguntas por si hay una letra en una posición, si no pones nada por defecto va a la 0
console.log(frase.split(" "));//Divide la frase y guarda las partes en un array
console.log(frase.slice(1,6));//Divide la frase
console.log(frase.search("Hola"));//Busca
console.log(frase.replace(" ", ""));//Reemplaza
for (let index = 0; index < frase.length; index++) {
    console.log(frase.charAt(index))
}
