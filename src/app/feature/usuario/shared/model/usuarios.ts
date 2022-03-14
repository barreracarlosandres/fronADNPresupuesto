export class Usuario {
    id: string;
    nombre: string;
    apellido: string;
    identificacionUsuario: string;

    constructor(id: string, nombre: string, apellido: string, identificacionUsuario: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacionUsuario = identificacionUsuario;
    }
}
