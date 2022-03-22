import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Gasto } from '../model/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Gasto[]>(`${environment.endpoint}/gastos`
    , this.http.optsName('consultar gastos'));
  }

  public guardar(gasto: Gasto) {
    return this.http.doPost<Gasto, boolean>(`${environment.endpoint}/gastos`, gasto,
                                                this.http.optsName('crear/actualizar gastos'));
  }

  public actualizar(gasto: Gasto) {    
    return this.http.doPut<Gasto, boolean>(
      `${environment.endpoint}/gastos/${gasto.id}`
      ,gasto
      ,this.http.optsName('actualizar gasto'));
  }

  public eliminar(gasto: Gasto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/gastos/${gasto.id}`,
                                                 this.http.optsName('eliminar gastos'));
  }

}
