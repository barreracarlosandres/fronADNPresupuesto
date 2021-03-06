import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html'
  
})
export class ActualizarUsuarioComponent implements OnInit {

  mensajeError;
  mostrarActualizar:boolean;
  mostrarMensajeError:boolean;
  datosUsuario: Usuario = new Usuario('','','','');
  actualizarForm: FormGroup;

  constructor(
        protected usuarioServices: UsuarioService
      , private router:Router) { }

  ngOnInit(): void {    
    this.construirFormularioUsuario();
  }

  datosActualizar(usuario:Usuario): void{
    
    this.mostrarActualizar=true;
    this.datosUsuario=usuario;
    this.construirFormularioUsuario();
  }

  ocultar():void{
    this.mostrarMensajeError=false;
    this.mostrarActualizar=false;
  }

  actualizar(): void{
    this.datosUsuario.nombre = this.actualizarForm.value.nombre;
    this.datosUsuario.apellido = this.actualizarForm.value.apellido;
    this.usuarioServices.actualizar(this.datosUsuario).subscribe(
      {
        next: () => {
          this.mostrarActualizar=false;
          this.router.navigateByUrl('/', {skipLocationChange: true})
            .then(() => { this.router.navigate(['usuario']); } );
        },
        error: error => {
          this.mostrarMensajeError=true;
          this.mostrarActualizar=true;          
            this.mensajeError = error;
        }
      }
    );
    
  }

  private construirFormularioUsuario() {
    this.actualizarForm = new FormGroup({
      id: new FormControl(
                    this.datosUsuario.id
                    , [Validators.required]),
      identificacionUsuario: new FormControl(
                    this.datosUsuario.identificacionUsuario
                    , [Validators.required]),
      nombre: new FormControl(
                    this.datosUsuario.nombre
                    , [Validators.required
                    , Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)
                    , Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      apellido: new FormControl(
                    this.datosUsuario.apellido
                    , [Validators.required])
    });
  }

}
