import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'crear',
        component: CrearUsuarioComponent
      },
      {
        path: 'listar',
        component: ListarUsuarioComponent
      },
      {
        path: 'borrar',
        component: BorrarUsuarioComponent
      }
      ,{
        path: 'actualizar',
        component: ActualizarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
