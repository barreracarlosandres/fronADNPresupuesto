import { Component, OnInit } from '@angular/core';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {

  public listarGastos: Observable<Gasto[]>

  constructor(protected gastoServive: GastoService) { }

  ngOnInit(): void {
    this.listarGastos = this.gastoServive.consultar();
  }

}
