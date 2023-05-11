// Esto es un comentario

/**
 * Esto es un comentario
 * Multilinea
 */

console.log("Hola Marco oo");
console.log("Hola Marco");

// Declaraci[on] de variables ES6:
var nombre: string = "Marco"

console.log("hola, " + nombre);
console.log("Que tal, ", nombre, "?");
console.log(`Como han ido las vacaciones, ${nombre} ?`);

let email = "marcoco.mahr@gmail.com" // Variable de tipo local
console.log(`Email de ${nombre} es ${email}`);

const PI: number = 3.1416; // Variable de tipo constante

var apellidos: any = "Hernandez"; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;

var error: boolean = false;

console.log(`Hay error: ${error}`);

// Cuando a la variable se le asigan el tipo, se llama inferid@
// Para TypeScrip se usan valores o valiables tipad@s


// Instanciacion multiple de variables 

let a:string,b:boolean,c:number; // Instancia 2 variables sin valor inicial

a = "TypeScrip";
b = true;
c = 10;

// Types: number, string, boolean, void, null, undefined

// Tipos m[as] complejos
let listaTareas: string[] = ["tarea1", "tarea2"];

// Combinar tipos en listas
let valores: (string | number | boolean)[] = [false, "hola", true, 40];

// Enumerados
enum Estados {
    'Completado' = 'C',
    'Incompleto' = 'I',
    'Pendiente' = 'P'
}

enum PuestoCarrera {
    'Primero' = 1,
    'Segundo',
    'Tercero'
}

let estadoTarea: Estados = Estados.Completado;
let PuestoMaraton: PuestoCarrera = PuestoCarrera.Segundo


// Interfaces

interface Tarea {
    titulo: string,
    estado: Estados,
    urgencia: number
}

// podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    titulo: "tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.titulo}`);


// Asignacion multiple de variables
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaracion 1 a 1
let miTitulo:string = miTarea.titulo;
let miEstado:Estados = miTarea.estado;
let miUrgencia:number = miTarea.urgencia;

// ** Factor Spread(Propagacion)

// Declaracion con factor de propagacion
let {titulo, estado, urgencia}:Tarea = miTarea;

// Types de TypeScript
type Producto = {
    precio: number,
    titulo: string,
    anio: number
}

// En listas
let listaCompraLunes: string[] = ['lehche', 'patatas'];
let listaCompraMartes: string[] = [...listaCompraLunes, 'pan', 'huevos'];
let listaCompraMiercoles: string[] = ['Carne', 'pescado'];
let listaCompraSemana: string[] = [...listaCompraLunes, ...listaCompraMiercoles]

// En objetos
let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'Bearer638084623629349'
}
// Cambiar un valor por propagacion
let nuevoEstadoApp = {
    ...estadoApp,
    session: 4
}

let coche : Producto = {
    titulo: 'Audi',
    precio: 45000,
    anio: 2023
}
// ** Condicionales

// Operador ternario
console.log(coche.anio < 2023 ? `Coche: ${coche.titulo} es viejo` : `Coche: ${coche.titulo} es nuevo`);

// if - else if - else
if(error){
    console.log('Hay un error');
}else{
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
 let listaTareasNueva: Tarea[] = [
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
]

// For clasico
for(let index = 0; index < listaTareasNueva.length; index++){
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.titulo}`);
    
}

// Foreach
listaTareasNueva.forEach(
    (tarea:Tarea, index:number) => {
        console.log(`${index} - ${tarea.titulo}`)
    }
)

// bucle While
while(tarea1.estado !== Estados.Completado){
    if(tarea1.urgencia === 5){
        tarea1.estado = Estados.Completado;
        break;
    }else{
        tarea1.urgencia ++;
    }
}

// Bucle Do While - se ejecuta al menos una ves
do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);


// ** Functions 
/**
 * Funcion que muestra un saludo por consola
 */
function saludar(){
    let nombre = 'Marco'
    console.log(`Hola, ${nombre}`);
}

// Invocacion de la funcion
saludar()

/**
 * Funcion que muestra un saludo por consola
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre:string){
    console.log(`Hola, ${nombre}`);
}

saludarPersona('marco');

/**
 * 
 * @param nombre Nombre de la persona a saludar, por defecto sera Marco
 */
function despedirPersona(nombre:string = "marco"){
    console.log(`Adios, ${nombre}`);
}

despedirPersona();
despedirPersona('Antonio');

/**
 * Funcion que muestra un Adios a una persona
 * @param nombre (opcional) Nombre de la persona
 */
function despedidaOpcional(nombre?:string){
    if(nombre){
        console.log(`Adios, ${nombre}`);
    }else{
        console.log('Adios');
    }
}

/**
 * Funcion que muestra un Adios a una persona
 * @param nombre (opcional) Nombre de la persona
 */
function despedidaOpcional2(nombre:string | undefined){
    if(nombre){
        console.log(`Adios, ${nombre}`)
    }else{
        console.log('Adios');
    }
}

function variosParams(nombre:string, apellidos?:string, edad:number = 18){
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} anios`);
    }else{
        console.log(`${nombre} tiene ${edad} anios`);
    }
}

variosParams('Marco'); //Marco tiene 18 anios
variosParams('Marco','Hdz');//Marco hdz tiene 18 anios
variosParams('Marco', undefined, 26);// Marco tiene 26 anios
variosParams('Marco', 'hdz', 26); // Marco hdz tiene 26 anios


function ejemploVariosTipos(a: string | number){
    if(typeof(a) === 'string'){
        console.log('A es un string');
    }else if(typeof(a) === 'number'){
        console.log('A es un number');
    }else{
        console.log('A no es un string ni un number');
        throw Error('A no es un string ni un number')
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
function ejemploReturn(nombre:string, apellidos:string):string | number{
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn('Marco', 'Hdz');
console.log(nombreCompleto);


/**
 * Funcion para mostrar nombres, recibe lista de nombres referidos
 * @param nombres es una lista de nombres de string
 */
function ejemploMultiparam(...nombres: string[]): void{
    nombres.forEach((nombre) => {
        console.log(nombre);
        
    });
}

ejemploMultiparam('Marco', 'Yael', 'Antonio', 'Ubaldo'); 
const lista = ['alberto', 'sandra'];
ejemploMultiparam(...lista);

function ejemploParamLista(nombres: string[]): void{
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}

ejemploParamLista(lista)

// Arrow functions

type Empleado = {
    nombre:string,
    apellidos:string,
    edad:number
}

let empleadoMarco:Empleado = {
    nombre: 'Marco',
    apellidos: 'San Jose',
    edad: 26
}

const mostarrEmpleados = (empleado:Empleado):string => `${empleado.nombre} tiene ${empleado.edad} anios`

mostarrEmpleados(empleadoMarco);

const datosEmpleado = (empleado: Empleado):string => {
    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} esta en la edad de jubilacion`;
    }else{
        return `Empleado ${empleado.nombre} esta en edad laboral`;
    }
}

datosEmpleado(empleadoMarco); // Empleado Marco est[a en la edad laboral]

/**
 * Funcion que te dice si ya puedes cobrar pension
 * @param empleado Parametro Empleado
 * @param cobrar Funcion que se agrega a esta funcion
 * @returns regresa un string que dice si ya puedes cobrar tu pension
 */
const obtenerSalario = (empleado: Empleado, cobrar:(empleado:Empleado) => string) => {
    if(empleado.edad > 70){
        return `${empleado.nombre} ya puedes cobrar pension`
    }else{
        return cobrar(empleado)
    }
}

/**
 * Funcion especifica para decir que no puedes cobrar pension
 * @param empleado Acepta un parametro empleado
 * @returns regresa el string que dice que aun no puede cobrar pension 
 */
const Cobrar = (empleado:Empleado):string => {
    return `${empleado.nombre} aun no puedes cobrar pension`;
}    

console.log(obtenerSalario(empleadoMarco, Cobrar));

// Async Functions

async function ejemploAsync(): Promise<string>{
    await console.log('Tarea a completar antes de seguir con la secuencia de instruccion');
    console.log('Tarea completada');
    return 'completada'
}

ejemploAsync().then((resp) => {
    console.log(`Respuesta: ${resp}`);
}).catch((err) => {
    console.log(`Ha habido un error: ${err}`);
}).finally(() => `Todo ha terminado`);

// Generators

function* ejemploGenerator(){
    //yield
    let index = 0;

    while(index < 5){
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
function* watcher(valor: number){
    yield valor;// Emitimos el valor inicial
    yield* worker(valor);// llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // Emitimos el valor final + 10
}

function* worker(valor: number){
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
    public terminar?: (tiempo:number) => void;
    public empezar(): void{
        setTimeout(() => {
           if(!this.terminar){
            return
           }
           this.terminar(Date.now());
        }, 5000);
    }
}

const miTemporizador:Temporizador = new Temporizador();

// Definimos la funcion del callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo:number) => {
    console.log('Evento terminado en :',tiempo);
}

miTemporizador.empezar();

// setInterval(() => console.log('tic'), 1000)

delete miTemporizador.terminar;

// document.getElementById('boton-login').addEventListener('click', () => {
//     console.log('Haz echo click en login'); 
// });



import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { LISTA_CURSOS } from "./mocks/cursos.mock";

const listaCursos: Curso[] = LISTA_CURSOS;

const Marco: Estudiante = new Estudiante('Marco',listaCursos, 'Hdz')


console.log(`${Marco.nombre} estudia:`);
Marco.cursos.forEach((curso) => {
    console.log(`Curso ${curso.nombre} - de ${curso.horas} horas`);
})

console.log(Marco.horasEstudiadas); //valor extraido de la clase como propiedad get


// Saber la instancia de un objeto/variable
// - TypeOf
// - InstanceOf

let fechaNacimiento = new Date(1991,10,10);

if(fechaNacimiento instanceof Estudiante){
    console.log(`Es una instancia de Date`);
}

if(Marco instanceof Estudiante){
    console.log(`Es una instancia de Estudiante`);
    
}

import { Empleado as Empleado_, Jefe } from "./models/Persona";

// Herencia y polimorfismo
let empleado1 : Empleado_ = new Empleado_('Marco', 'hdz', 26, 4000);
let empleado2 : Empleado_ = new Empleado_('Oscar', 'Agls', 28, 4000);
let empleado3 : Empleado_ = new Empleado_('Oliver', 'Plo', 26, 4000);

empleado1.saludar();

let jefe : Jefe = new Jefe('Erick', 'gro', 35);

jefe.empleados.push(empleado1, empleado2, empleado3);

jefe.saludar()
jefe.empleados.forEach((emple: Empleado_) => {
    emple.saludar();
})

import { ITarea, Nivel } from "./interfaces/ITarea";
import { Programar } from "./models/Programar";

// Uso de inetrfaces
let programar: ITarea = {
    titulo: "Programar en TypeScript",
    descripcion: "Practicar con Katas para aprender a desarrollar con TS",
    completada: false,
    urgencia: Nivel.Urgente,
    resumen: function(): string{
        return `${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`
    }
}

console.log(programar.resumen());

// Tarae de programacion
let programamrTypeScript: Programar = new Programar('TypeScript', 'Tarea de programacion', false, Nivel.Urgente);

console.log(programamrTypeScript.resumen());


// Decoradores experimentales
// - Clases
// - Parametros
// - Metodos
// - Propiedades

function Override(label:string){
    return function(target:any, key:string){
        console.log(label);
        
        Object.defineProperty(target, key, {
            configurable:false,
            get:() => label            
        })
    }
}

class PruebaDecorator{
    @Override('Prueba') // Llamar a la funcion Override
    nombre: string = 'Martin'
}

let prueba = new PruebaDecorator();
console.log(prueba.nombre);

function soloLectura(target:any, key:string){
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura{
    @soloLectura
    nombre: string = '';
}

let pruebaSoloLectura = new PruebaSoloLectura();
pruebaSoloLectura.nombre = 'Marco';

console.log(pruebaSoloLectura.nombre);

// Decorador que muestra la posicion e implime el parametro que se le pasa
function mostrarPosicion(target:any, propertyKey: string, parameterIndex: number){
    console.log('Posision', parameterIndex);
}

class PruebaMetodoDecorador{
    prueba(a:string, @mostrarPosicion b: boolean){
        console.log(b);
        
    }
}

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

