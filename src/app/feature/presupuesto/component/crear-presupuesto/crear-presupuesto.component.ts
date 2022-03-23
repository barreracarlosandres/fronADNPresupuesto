import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';



@Component({
  selector: 'app-crear-presupuesto',
  templateUrl: './crear-presupuesto.component.html'
})
export class CrearPresupuestoComponent implements OnInit {

  datosPresupuesto: Presupuesto = new Presupuesto(null,'',null,'');
  presupuestoForm: FormGroup;

  constructor(
     protected presupuestoServices: PresupuestoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioPresupuesto(); 
  }

  crear() {         
    this.presupuestoServices.guardar(this.presupuestoForm.value).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['presupuesto']);
    });
  }

  private construirFormularioPresupuesto() {
    this.presupuestoForm = new FormGroup({      
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
