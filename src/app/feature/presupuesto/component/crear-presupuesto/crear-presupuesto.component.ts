import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';

@Component({
  selector: 'app-crear-presupuesto',
  templateUrl: './crear-presupuesto.component.html'
})
export class CrearPresupuestoComponent implements OnInit {

  datosPresupuesto: Presupuesto = new Presupuesto(0,'',0,'');
  presupuestoForm: FormGroup;

  constructor(protected presupuestoServices: PresupuestoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioPresupuesto(); 
  }

  crear() {    
    let obs = this.presupuestoServices.guardar(this.presupuestoForm.value);
    obs.subscribe(
      _res=>this.router.navigate(['./presupuesto'])
      .then(() => {window.location.reload();})
      );
  }

  private construirFormularioPresupuesto() {
    this.presupuestoForm = new FormGroup({
      id: new FormControl(
                this.datosPresupuesto.id
                , [Validators.required]),
      identificacionUsuario: new FormControl(
                this.datosPresupuesto.identificacionUsuario
                , [Validators.required]),
      valorPresupuesto: new FormControl(
                this.datosPresupuesto.valorPresupuesto
                , [Validators.required]),
      fechaPresupuesto: new FormControl(
                this.datosPresupuesto.fechaPresupuesto
                , [Validators.required])                                                            
    });
  }

}
