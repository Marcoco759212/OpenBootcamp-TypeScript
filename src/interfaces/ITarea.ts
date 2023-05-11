export enum Nivel{
    'Informativa',
    'Urgente',
    'Bloqueada'
}

// Interface sirve para definir la firma y los puntos a implementar por quien la use
export interface ITarea{
    titulo:string,
    descripcion: string,
    completada: boolean,
    urgencia?:Nivel,
    resumen: () => string
}