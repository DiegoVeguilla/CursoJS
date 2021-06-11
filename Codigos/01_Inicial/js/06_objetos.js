let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  edad: 17,
  hobbies: ["cine", "deporte", "dormir"],
  hijos: [
    { nombre: "celia", edad: 4},
    { nombre: "claudia", edad: 24}
  ]
};
console.log(objeto.apellido);

/*objeto.hobbies.forEach((element) => {
  console.log(element);
});*/

/*objeto.hijos.forEach(element => {
    console.log(element.nombre);
});*/

/*console.log(objeto.hijos.filter((element)=>
    element.edad>7
));*/

objeto["hijos"].push({nombre: "diego", edad: 2});

console.log(objeto["hijos"])


