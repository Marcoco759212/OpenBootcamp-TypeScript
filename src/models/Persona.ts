class Persona {
    nombre:string;
    apellido:string;
    edad:number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(): void{
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`);
        
    }
}

export class Empleado extends Persona{
    suedlo:number;

    constructor(nombre: string, apellido:string, edad:number, sueldo:number){
        super(nombre, apellido, edad);
        this.suedlo = sueldo;
    }

    saludar(): void {
        console.log(`Hola soy ${this.nombre} y mi sueldo es de ${this.suedlo}`);
    }
}

export class Jefe extends Persona{
    empleados: Empleado[] = [];

    constructor(nombre: string, apellido:string, edad:number){
        super(nombre, apellido, edad);
    }
}