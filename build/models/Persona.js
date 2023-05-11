"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Empleado = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`);
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.suedlo = sueldo;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y mi sueldo es de ${this.suedlo}`);
    }
}
exports.Empleado = Empleado;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this.empleados = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Persona.js.map