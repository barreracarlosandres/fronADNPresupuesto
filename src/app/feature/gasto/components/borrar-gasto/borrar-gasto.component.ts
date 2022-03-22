import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';

@Component({
  selector: 'app-borrar-gasto',
  templateUrl: './borrar-gasto.component.html'
})
export class BorrarGastoComponent implements OnInit {

  mostrar:boolean;

  constructor(
    protected gastoService: GastoService
    , private router:Router
  ) { }

  ngOnInit(): void {
    this.mostrar=false;
  }

  borrar(gasto:Gasto):void {
    this.gastoService.eliminar(gasto).subscribe(
      _res=>this.router.navigate(['./gasto'])
      .then(() => {window.location.reload();})      
    );
  }

}
