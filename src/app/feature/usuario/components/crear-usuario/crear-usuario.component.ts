import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html'
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(protected usuarioServices: UsuarioService
    , private router:Router) { 
      
}

ngOnInit() {

     this.construirFormularioUsuario();    

  }

  crear() {
    let obs = this.usuarioServices.guardar(this.usuarioForm.value)    
    obs.subscribe(
      _res=>this.router.navigate(['./usuario'])
      .then(() => {window.location.reload();})
      
      ) 
  }
  
  private construirFormularioUsuario() {
    this.usuarioForm = new FormGroup({
      identificacionUsuario: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      apellido: new FormControl('', [Validators.required]),                                                             
    });
  }

}

