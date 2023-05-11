"use strict";
// Esto es un comentario
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Esto es un comentario
 * Multilinea
 */
console.log("Hola Marco oo");
console.log("Hola Marco");
// Declaraci[on] de variables ES6:
var nombre = "Marco";
console.log("hola, " + nombre);
console.log("Que tal, ", nombre, "?");
console.log(`Como han ido las vacaciones, ${nombre} ?`);
let email = "marcoco.mahr@gmail.com"; // Variable de tipo local
console.log(`Email de ${nombre} es ${email}`);
const PI = 3.1416; // Variable de tipo constante
var apellidos = "Hernandez"; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;
var error = false;
console.log(`Hay error: ${error}`);
// Cuando a la variable se le asigan el tipo, se llama inferid@
// Para TypeScrip se usan valores o valiables tipad@s
// Instanciacion multiple de variables 
let a, b, c; // Instancia 2 variables sin valor inicial
a = "TypeScrip";
b = true;
c = 10;
// Types: number, string, boolean, void, null, undefined
// Tipos m[as] complejos
let listaTareas = ["tarea1", "tarea2"];
// Combinar tipos en listas
let valores = [false, "hola", true, 40];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let PuestoMaraton = PuestoCarrera.Segundo;
// podemos crear variables que sigan la interface Tarea
let tarea1 = {
    titulo: "tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.titulo}`);
// Asignacion multiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
};
// Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// ** Factor Spread(Propagacion)
// Declaracion con factor de propagacion
let { titulo, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = ['lehche', 'patatas'];
let listaCompraMartes = [...listaCompraLunes, 'pan', 'huevos'];
let listaCompraMiercoles = ['Carne', 'pescado'];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
// En objetos
let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'Bearer638084623629349'
};
// Cambiar un valor por propagacion
let nuevoEstadoApp = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    titulo: 'Audi',
    precio: 45000,
    anio: 2023
};
// ** Condicionales
// Operador ternario
console.log(coche.anio < 2023 ? `Coche: ${coche.titulo} es viejo` : `Coche: ${coche.titulo} es nuevo`);
// if - else if - else
if (error) {
    console.log('Hay un error');
}
else {
    console.log('No hay un error');
}
// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log('La tarea esta completada');
        break;
    case Estados.Incompleto:
        console.log('La tarea no esta completada');
        break;
    case Estados.Pendiente:
        console.log('La tarea esta pendiente de completarse');
        break;
    default:
        break;
}
// ** Bucles
let listaTareasNueva = [
    {
        titulo: 'Tarea1',
        estado: Estados.Completado,
        urgencia: 10
    },
    {
        titulo: 'Tarea2',
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        titulo: 'Tarea3',
        estado: Estados.Incompleto,
        urgencia: 15
    }
];
// For clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.titulo}`);
}
// Foreach
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.titulo}`);
});
// bucle While
while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia === 5) {
        tarea1.estado = Estados.Completado;
        break;
    }
    else {
        tarea1.urgencia++;
    }
}
// Bucle Do While - se ejecuta al menos una ves
do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
// ** Functions 
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = 'Marco';
    console.log(`Hola, ${nombre}`);
}
// Invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludarPersona('marco');
/**
 *
 * @param nombre Nombre de la persona a saludar, por defecto sera Marco
 */
function despedirPersona(nombre = "marco") {
    console.log(`Adios, ${nombre}`);
}
despedirPersona();
despedirPersona('Antonio');
/**
 * Funcion que muestra un Adios a una persona
 * @param nombre (opcional) Nombre de la persona
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    }
    else {
        console.log('Adios');
    }
}
/**
 * Funcion que muestra un Adios a una persona
 * @param nombre (opcional) Nombre de la persona
 */
function despedidaOpcional2(nombre) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    }
    else {
        console.log('Adios');
    }
}
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} anios`);
    }
    else {
        console.log(`${nombre} tiene ${edad} anios`);
    }
}
variosParams('Marco'); //Marco tiene 18 anios
variosParams('Marco', 'Hdz'); //Marco hdz tiene 18 anios
variosParams('Marco', undefined, 26); // Marco tiene 26 anios
variosParams('Marco', 'hdz', 26); // Marco hdz tiene 26 anios
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log('A es un string');
    }
    else if (typeof (a) === 'number') {
        console.log('A es un number');
    }
    else {
        console.log('A no es un string ni un number');
        throw Error('A no es un string ni un number');
    }
}
ejemploVariosTipos('Hola');
ejemploVariosTipos(3);
//ejemploVariosTipos(true); //Error
// Funcion que puede devolver o un string o un numero
/**
 *
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre conmpleto de la persona
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn('Marco', 'Hdz');
console.log(nombreCompleto);
/**
 * Funcion para mostrar nombres, recibe lista de nombres referidos
 * @param nombres es una lista de nombres de string
 */
function ejemploMultiparam(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultiparam('Marco', 'Yael', 'Antonio', 'Ubaldo');
const lista = ['alberto', 'sandra'];
ejemploMultiparam(...lista);
function ejemploParamLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploParamLista(lista);
let empleadoMarco = {
    nombre: 'Marco',
    apellidos: 'San Jose',
    edad: 26
};
const mostarrEmpleados = (empleado) => `${empleado.nombre} tiene ${empleado.edad} anios`;
mostarrEmpleados(empleadoMarco);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 70) {
        return `Empleado ${empleado.nombre} esta en la edad de jubilacion`;
    }
    else {
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
};
datosEmpleado(empleadoMarco); // Empleado Marco est[a en la edad laboral]
/**
 * Funcion que te dice si ya puedes cobrar pension
 * @param empleado Parametro Empleado
 * @param cobrar Funcion que se agrega a esta funcion
 * @returns regresa un string que dice si ya puedes cobrar tu pension
 */
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return `${empleado.nombre} ya puedes cobrar pension`;
    }
    else {
        return cobrar(empleado);
    }
};
/**
 * Funcion especifica para decir que no puedes cobrar pension
 * @param empleado Acepta un parametro empleado
 * @returns regresa el string que dice que aun no puede cobrar pension
 */
const Cobrar = (empleado) => {
    return `${empleado.nombre} aun no puedes cobrar pension`;
};
console.log(obtenerSalario(empleadoMarco, Cobrar));
// Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('Tarea a completar antes de seguir con la secuencia de instruccion');
        console.log('Tarea completada');
        return 'completada';
    });
}
ejemploAsync().then((resp) => {
    console.log(`Respuesta: ${resp}`);
}).catch((err) => {
    console.log(`Ha habido un error: ${err}`);
}).finally(() => `Todo ha terminado`);
// Generators
function* ejemploGenerator() {
    //yield
    let index = 0;
    while (index < 5) {
        // Emitiremos un valor 
        yield index++;
    }
}
// Guardamos la funcion generdora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
// worker
function* watcher(valor) {
    yield valor; // Emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // Emitimos el valor final + 10
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
// Persistencia de datos
// 1. LocalStorage --> Alamcena los datos en el navegador (no se eliminan automaticamente)
// 2. SessionStorage --> La diferiencia radica en la sesion de navegador. Es decir los datos se persisten en la sesion del navegador
// 3. Cookies --> Tienen una fecha de caducidad y tambien tienen un ambioto de URL
// LocalStorage
// function guardarLocalStorage():void{
//     localStorage.set('nombre','Marco');
// }
// function leer():void{
//     AsyncLocalStorage.get('nombre');
// }
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar) {
                return;
            }
            this.terminar(Date.now());
        }, 5000);
    }
}
const miTemporizador = new Temporizador();
// Definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log('Evento terminado en :', tiempo);
};
miTemporizador.empezar();
// setInterval(() => console.log('tic'), 1000)
delete miTemporizador.terminar;
const Estudiante_1 = require("./models/Estudiante");
const cursos_mock_1 = require("./mocks/cursos.mock");
const listaCursos = cursos_mock_1.LISTA_CURSOS;
const Marco = new Estudiante_1.Estudiante('Marco', listaCursos, 'Hdz');
console.log(`${Marco.nombre} estudia:`);
Marco.cursos.forEach((curso) => {
    console.log(`Curso ${curso.nombre} - de ${curso.horas} horas`);
});
console.log(Marco.horasEstudiadas); //valor extraido de la clase como propiedad get
// Saber la instancia de un objeto/variable
// - TypeOf
// - InstanceOf
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Estudiante_1.Estudiante) {
    console.log(`Es una instancia de Date`);
}
if (Marco instanceof Estudiante_1.Estudiante) {
    console.log(`Es una instancia de Estudiante`);
}
const Persona_1 = require("./models/Persona");
// Herencia y polimorfismo
let empleado1 = new Persona_1.Empleado('Marco', 'hdz', 26, 4000);
let empleado2 = new Persona_1.Empleado('Oscar', 'Agls', 28, 4000);
let empleado3 = new Persona_1.Empleado('Oliver', 'Plo', 26, 4000);
empleado1.saludar();
let jefe = new Persona_1.Jefe('Erick', 'gro', 35);
jefe.empleados.push(empleado1, empleado2, empleado3);
jefe.saludar();
jefe.empleados.forEach((emple) => {
    emple.saludar();
});
const ITarea_1 = require("./interfaces/ITarea");
const Programar_1 = require("./models/Programar");
// Uso de inetrfaces
let programar = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con Katas para aprender a desarrollar con TS",
    completada: false,
    urgencia: ITarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
};
console.log(programar.resumen());
// Tarae de programacion
let programamrTypeScript = new Programar_1.Programar('TypeScript', 'Tarea de programacion', false, ITarea_1.Nivel.Urgente);
console.log(programamrTypeScript.resumen());
// Decoradores experimentales
// - Clases
// - Parametros
// - Metodos
// - Propiedades
function Override(label) {
    return function (target, key) {
        console.log(label);
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class PruebaDecorator {
    constructor() {
        this.nombre = 'Martin';
    }
}
__decorate([
    Override('Prueba') // Llamar a la funcion Override
    ,
    __metadata("design:type", String)
], PruebaDecorator.prototype, "nombre", void 0);
let prueba = new PruebaDecorator();
console.log(prueba.nombre);
function soloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
class PruebaSoloLectura {
    constructor() {
        this.nombre = '';
    }
}
__decorate([
    soloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let pruebaSoloLectura = new PruebaSoloLectura();
pruebaSoloLectura.nombre = 'Marco';
console.log(pruebaSoloLectura.nombre);
// Decorador que muestra la posicion e implime el parametro que se le pasa
function mostrarPosicion(target, propertyKey, parameterIndex) {
    console.log('Posision', parameterIndex);
}
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, mostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
let pruebaMetodoDecorador = new PruebaMetodoDecorador().prueba('hola', false);
// Patrones Creacionales
// import { Singleton } from "./patterns/creacionales/singleton";
// const sigleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();
// //Compara si los 2 son los mismos
// if (sigleton1 === singleton2) {
//     console.log('Singleton works, both variables contain the same instance.');
// } else {
//     console.log('Singleton failed, variables contain different instances.');
// }
//# sourceMappingURL=index.js.map