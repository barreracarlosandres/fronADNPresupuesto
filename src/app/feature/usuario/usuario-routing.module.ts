import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-producto/crear-usuariio.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-producto.component';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { UsuarioComponent } from './components/producto/usuario.component';


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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
