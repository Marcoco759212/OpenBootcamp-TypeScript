"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // Constructor 
    constructor(nombre, cursos, apellidos) {
        // Inicializamos las propiedades
        this.nombre = nombre;
        this.cursos = cursos;
        if (apellidos) {
            this.apellidos = apellidos;
        }
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map