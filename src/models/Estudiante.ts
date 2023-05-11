import {Curso} from './Curso';

export class Estudiante{
    // Propiedades de clase
    nombre:string;
    apellidos?:string;
    cursos: Curso[];

    // Constructor 
    constructor(nombre:string, cursos: Curso[], apellidos?:string){
        // Inicializamos las propiedades
        this.nombre = nombre;
        this.cursos = cursos;
        if(apellidos){
            this.apellidos = apellidos;
        }
    }

    get horasEstudiadas(): number{
        let horasEstudiadas = 0;

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        });

        return horasEstudiadas;
    }
}