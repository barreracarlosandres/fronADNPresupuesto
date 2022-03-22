import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';

@Component({
  selector: 'app-actualizar-gasto',
  templateUrl: './actualizar-gasto.component.html'
})
export class ActualizarGastoComponent implements OnInit {

  mostrar:boolean;
  datosGasto: Gasto = new Gasto(0,'',0,'');
  actualizarForm: FormGroup;

  constructor(
      protected gastoService: GastoService
    , private router:Router) { }

  ngOnInit(): void {
    this.construirFormularioGasto();
  }

  datosActualizar(gasto:Gasto): void{
    
    this.mostrar=true;
    this.datosGasto=gasto;
    this.construirFormularioGasto();
  }

  ocultar():void{
    this.mostrar=false;
  }

  actualizar(): void{
    this.datosGasto.id = this.actualizarForm.value.id;
    this.datosGasto.identificacionUsuario = this.actualizarForm.value.identificacionUsuario;
    this.datosGasto.valorGasto = this.actualizarForm.value.valorGasto;
    this.datosGasto.fechaGasto = this.actualizarForm.value.fechaGasto;
    let obs = this.gastoService.actualizar(this.datosGasto);   
    obs.subscribe(
      _res=>this.router.navigate(['./gasto']));
    this.mostrar=false;
    }
    

  private construirFormularioGasto() {
    this.actualizarForm = new FormGroup({
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
