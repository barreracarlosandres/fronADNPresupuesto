import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Presupuesto } from '../model/presupuesto';

@Injectable()
export class PresupuestoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Presupuesto[]>(
      `${environment.endpoint}/presupuestos`
      , this.http.optsName('consultar presupuesto'));    
  }

  public guardar(presupuesto: Presupuesto) {
    return this.http.doPost<Presupuesto, boolean>(
      `${environment.endpoint}/presupuestos`
      , presupuesto
      , this.http.optsName('crear/actualizar presupuesto'));
  }

  public actualizar(presupuesto: Presupuesto) {    
    return this.http.doPut<Presupuesto, boolean>(
      `${environment.endpoint}/presupuestos/${presupuesto.id}`
      ,presupuesto
      ,this.http.optsName('actualizar presupuesto'));
  }

  public eliminar(presupuesto: Presupuesto) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/presupuestos/${presupuesto.id}`
      , this.http.optsName('eliminar presupuesto'));
  }
}
