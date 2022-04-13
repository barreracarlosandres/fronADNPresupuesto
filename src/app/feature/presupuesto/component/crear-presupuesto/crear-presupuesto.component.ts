import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-presupuesto',
  templateUrl: './crear-presupuesto.component.html'
})

export class CrearPresupuestoComponent implements OnInit {

  mensajeError;
  mostrarMensajeError:boolean;
  presupuestoForm: FormGroup;

  constructor(
     protected presupuestoServices: PresupuestoService
    , private router:Router) { }

  ngOnInit(): void  {
    this.construirFormularioPresupuesto();
    this.mostrarMensajeError=true; 
  }
 
  crear() {         
    console.log(this.presupuestoForm.value.identificacionUsuario);
    console.log(this.presupuestoForm.value.valorPresupuesto);
    console.log(this.presupuestoForm.value.fechaPresupuesto);    
    this.presupuestoServices.guardar(this.presupuestoForm.value)
    .subscribe(
      {   
          next: () => {      
            this.router.navigateByUrl('/', {skipLocationChange: true})
              .then(() => { this.router.navigate(['presupuesto']); } );
          },     
          error: error1 => {
              this.mostrarMensajeError=false;              
              this.mensajeError = error1;
              console.log(`mensaje->${error1.error.mensaje}`);
          }
      }
    );
  }

  private construirFormularioPresupuesto() {
    this.presupuestoForm = new FormGroup({      
      identificacionUsuario: new FormControl('', [Validators.required, Validators.pattern('\d{1,15}')]),
      valorPresupuesto: new FormControl('', [Validators.required, Validators.pattern('\d{1,7}')]),
      fechaPresupuesto: new FormControl('', [Validators.required, Validators.pattern('/^(\d){4,4}-([1|0]\d)-([0-3]\d) (\d\d:){2,2}(\d\d)$')] )
    });
  }

}
