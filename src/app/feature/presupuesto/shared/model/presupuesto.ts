export class Presupuesto {
    id: number;
    identificacionUsuario: string ;
    valorPresupuesto: number;
    fechaPresupuesto: string;

    constructor(  id:number
                , identificacionUsuario:string
                , varlorPresupuesto:number
                , fechaPresupuesto:string){
        this.id = id;
        this.identificacionUsuario = identificacionUsuario ;
        this.valorPresupuesto = varlorPresupuesto;
        this.fechaPresupuesto = fechaPresupuesto;
    }
}
