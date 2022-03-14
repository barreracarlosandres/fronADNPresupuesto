import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';


@Injectable()
export class UsuarioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios`, this.http.optsName('consultar usuarios'));
  }

  public guardar(producto: Usuario) {
    return this.http.doPost<Usuario, boolean>(`${environment.endpoint}/usuarios`, producto,
                                                this.http.optsName('crear/actualizar usuario'));
  }

  public eliminar(producto: Usuario) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/usuarios/${producto.id}`,
                                                 this.http.optsName('eliminar usuario'));
  }
}
