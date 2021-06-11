class Persona{

    //Propiedades

    nombre;
    apellido;
    edad;

    //Constructores

    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    //Funciones

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }

    get getNombre(){
        return this.nombre;
    }

}

let persona= new Persona("Diego", "Veguilla", 19);

persona.mostrarDatos();

//console.log(persona.getNombre());
