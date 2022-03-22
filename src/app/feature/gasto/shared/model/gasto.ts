export class Gasto {
    id: number;
    identificacionUsuario: string ;
    valorGasto: number;
    fechaGasto: string;

    constructor(  id:number
                , identificacionUsuario:string
                , varlorgasto:number
                , fechaGasto:string){
        this.id = id;
        this.identificacionUsuario = identificacionUsuario ;
        this.valorGasto = varlorgasto;
        this.fechaGasto = fechaGasto;
    }
}
