import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarGastoComponent } from './components/actualizar-gasto/actualizar-gasto.component';
import { BorrarGastoComponent } from './components/borrar-gasto/borrar-gasto.component';
import { CrearGastoComponent } from './components/crear-gasto/crear-gasto.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { ListarGastoComponent } from './components/listar-gasto/listar-gasto.component';

const routes: Routes = [
  {
    path: '',
    component: GastoComponent,
    children: [
      {
        path: 'listar',
        component: ListarGastoComponent
      },
      {
        path: 'borrar',
        component: BorrarGastoComponent
      },
      {
        path: 'actualizar',
        component: ActualizarGastoComponent
      },
      {
        path: 'crear',
        component: CrearGastoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastoRoutingModule { }
