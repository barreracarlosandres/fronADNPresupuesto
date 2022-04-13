import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.component.html'
})
export class CrearGastoComponent implements OnInit {

  datosGasto: Gasto = new Gasto(0,'',null,'');
  gastoForm: FormGroup;
  mensajeError;
  mostrarMensajeError:boolean;

  constructor(
    protected gastoServices: GastoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioGasto();
    this.mostrarMensajeError=true; 
  }

  crear() {    
    this.gastoServices.guardar(this.gastoForm.value)
    .subscribe(
      {   
          next: () => {      
            this.router.navigateByUrl('/', {skipLocationChange: true})
              .then(() => { this.router.navigate(['usuario']); } );
          },     
          error: error => {
              this.mostrarMensajeError=false;
              this.mensajeError = error;
          }
      }
    );
  }

  private construirFormularioGasto() {
    this.gastoForm = new FormGroup({
      id: new FormControl(
                this.datosGasto.id
                , [Validators.required]),
      identificacionUsuario: new FormControl(
                this.datosGasto.identificacionUsuario
                , [Validators.required]),
      valorGasto: new FormControl(
                this.datosGasto.valorGasto
                , [Validators.required]),
      fechaGasto: new FormControl(
                this.datosGasto.fechaGasto
                , [Validators.required])                                                            
    });
  }

}
