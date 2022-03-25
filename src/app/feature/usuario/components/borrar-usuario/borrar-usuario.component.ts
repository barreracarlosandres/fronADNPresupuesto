import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html'
})
export class BorrarUsuarioComponent implements OnInit {

  mensajeError;
  mostrarMensajeError:boolean;
  mostrar:boolean;

  constructor(protected usuarioService: UsuarioService
    , private router:Router ) { }

  ngOnInit() {
    this.mostrar=false;
    this.mostrarMensajeError=true;  
  }

  borrar(usuario:Usuario):void {
    this.usuarioService.eliminar(usuario).subscribe(
      {   
        next: () => {
          this.mostrar=false;
          this.router.navigateByUrl('/', {skipLocationChange: true})
            .then(() => { this.router.navigate(['usuario']); } );
        },     
        error: error => {
            this.mostrar=true;
            this.mostrarMensajeError=false;
            this.mensajeError = error;
            
        }
      }
    );    
  }
}
