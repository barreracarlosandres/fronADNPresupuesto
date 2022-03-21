import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';

@Component({
  selector: 'app-borrar-presupuesto',
  templateUrl: './borrar-presupuesto.component.html'
})
export class BorrarPresupuestoComponent implements OnInit {

  mostrar:boolean;

  constructor(protected presupuestoService: PresupuestoService
    , private router:Router) { }

  ngOnInit(): void {
    this.mostrar=false;
  }

  borrar(presupuesto:Presupuesto):void {
    this.presupuestoService.eliminar(presupuesto).subscribe(
      _res=>this.router.navigate(['./presupuesto'])
      .then(() => {window.location.reload();})      
    );
  }

}
