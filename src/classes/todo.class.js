 export class Todo{

    static fromJason({id,tarea, completado, creado}){

        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        return tempTodo;
    }

    constructor( tarea ){
        this.tarea = tarea;

        this.id = new Date().getTime();// Representacion de la hora actual para manejarlo como id
        this.completado = false;// Si la tarea se ha completado
        this.creado = new Date();// Para crear la hora
    }
 }