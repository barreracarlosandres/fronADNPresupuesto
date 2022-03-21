import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

@Component({
  selector: 'app-borrar-usuario',
  templateUrl: './borrar-usuario.component.html',
  styleUrls: ['./borrar-usuario.component.css']
})
export class BorrarUsuarioComponent implements OnInit {

  noMostrar:boolean=false;

  constructor(protected usuarioService: UsuarioService
    , private router:Router ) { }

  ngOnInit() {
    this.noMostrar=false;    
  }

  borrar(usuario:Usuario):void {
    this.usuarioService.eliminar(usuario).subscribe(
      _res=>this.router.navigate(['./usuario'])
      .then(() => {window.location.reload();})      
    );  
    
  }
}
