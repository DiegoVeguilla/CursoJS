/*let coleccionNumeros=[1, 2, 3, 4, 5, 6];
let coleccionCosas=["uno", 1, true, 3, "pie"];

//coleccionCosas.forEach((element) => console.log(element))

coleccionCosas[0]="otro valor";
console.log(coleccionCosas);

console.log("Añadiendo cosas");

coleccionCosas[4]="nuestro valor";

console.log(coleccionCosas);*/

/*let equipos = [
  "Atleti",
  "Madrid",
  "Barça",
  "Sevilla",
  "Getafe",
  "Alcorcón",
  "Villareal",
  "Alavés",
  "Eibar",
];

equipos.push("Villareal", "Alavés", "Eibar"); //Añade cosas
console.log(`${equipos.pop()}`);//Elimina y retorna el último elemento del array
equipos.unshift("Valencia");//Añade nuevos elementos al principio del array
equipos.shift();//Elimina y retorna el primer elemento del array

console.log(equipos);*/

//obtener un array con los equipos que tienen un B o una l

/*let equiposFiltro=[];

equipos.forEach(element => {
    if (element.includes("B") || element.includes("l")) {
        equiposFiltro.push(element);
    }
});

equiposFiltro=equipos.filter(
    (element)=> element.indexOf("B")!=-1 || element.indexOf("l")!=-1
    );

console.log(equiposFiltro);*/

let equipos=[
["Atleti", 34],
["Madrid", 56],
["Barça", 21],
["Sevilla", 90],
["Getafe", 76],
["Alcorcón", 55],
["Villareal", 44],
["Alavés", 33],
["Eibar", 12]
];

/*equipos.forEach(element => {
    console.log(element[1])
});*/

let numeros=[1, 2, 3, 5, 6, 90, 56, 34, 43, 23];

equipos.sort((itemA, itemB)=>{

    if (itemA[1]<itemB[1]) {
        return 1
    }else if(itemB[1]<itemA[1]){
        return-1
    }else{
        return 0
    }

});//ordena

equipos.forEach((element, index) => {
    console.log(`${index+1}. ${element[0]}-${element[1]}`);
});
