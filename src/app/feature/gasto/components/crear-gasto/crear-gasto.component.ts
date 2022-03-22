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

  constructor(
    protected gastoServices: GastoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioGasto(); 
  }

  crear() {    
    let obs = this.gastoServices.guardar(this.gastoForm.value);
    obs.subscribe(
      _res=>this.router.navigate(['./gastos'])
      .then(() => {window.location.reload();})
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
