import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';


@Component({
  selector: 'app-actualizar-presupuesto',
  templateUrl: './actualizar-presupuesto.component.html'
})
export class ActualizarPresupuestoComponent implements OnInit {  

  mostrar:boolean;
  datosPresupuesto: Presupuesto = new Presupuesto(0,'',0,'');
  actualizarForm: FormGroup;

  constructor(
      protected presupuestoService: PresupuestoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioPresupuesto();
  }

  datosActualizar(presupuesto:Presupuesto): void{
    
    this.mostrar=true;
    this.datosPresupuesto=presupuesto;
    this.construirFormularioPresupuesto();
  }

  ocultar():void{
    this.mostrar=false;
  }

  actualizar(): void{
    this.datosPresupuesto.id = this.actualizarForm.value.id;
    this.datosPresupuesto.identificacionUsuario = this.actualizarForm.value.identificacionUsuario;
    this.datosPresupuesto.valorPresupuesto = this.actualizarForm.value.valorPresupuesto;
    this.datosPresupuesto.fechaPresupuesto = this.actualizarForm.value.fechaPresupuesto;
    let obs = this.presupuestoService.actualizar(this.datosPresupuesto);   
    obs.subscribe(
      _res=>this.router.navigate(['./presupuesto'])
      ,
      error => {console.log(error.error.mensaje);
        this.mostrar = false;
      }
      );
      
    this.mostrar=false;

  }

  private construirFormularioPresupuesto() {
    this.actualizarForm = new FormGroup({
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
