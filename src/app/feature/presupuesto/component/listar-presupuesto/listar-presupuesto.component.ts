import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-presupuesto',
  templateUrl: './listar-presupuesto.component.html',
  styleUrls: ['./listar-presupuesto.component.css']
})
export class ListarPresupuestoComponent implements OnInit {

  public listarPresupuestos: Observable<Presupuesto[]>;

  constructor(protected presupuestoServive: PresupuestoService) { }

  ngOnInit() {
    this.listarPresupuestos = this.presupuestoServive.consultar();
  }

}
