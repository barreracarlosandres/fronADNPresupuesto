import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Usuario } from '@usuario/shared/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  
  public listaUsuarios: Observable<Usuario[]>;

    constructor(
      protected usuarioService: UsuarioService
      , private router:Router) { }

  ngOnInit() {
    this.listaUsuarios = this.usuarioService.consultar();
      }

  crear_presupuesto(usuario:Usuario)
  {
    console.log(`id para crear usuario ${usuario.identificacionUsuario}`);
    this.router.navigateByUrl(`/presupuesto/crear`);
  }

  crear_gasto(usuario:Usuario)
  {
    console.log(`id para crear gasto ${usuario.identificacionUsuario}`);
    this.router.navigateByUrl('/gasto/crear');
  }
   
}
