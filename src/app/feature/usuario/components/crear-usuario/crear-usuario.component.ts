import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(protected usuarioServices: UsuarioService) { }

  ngOnInit() {
    this.construirFormularioUsuario();
  }

  crear() {
    let obs = this.usuarioServices.guardar(this.usuarioForm.value);
    obs.subscribe( err => console.error(err));
    //this.refresh();
  }

  refresh(): void {
    window.location.reload();
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
