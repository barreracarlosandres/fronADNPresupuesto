import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPresupuestoComponent } from './component/actualizar-presupuesto/actualizar-presupuesto.component';
import { BorrarPresupuestoComponent } from './component/borrar-presupuesto/borrar-presupuesto.component';
import { CrearPresupuestoComponent } from './component/crear-presupuesto/crear-presupuesto.component';
import { ListarPresupuestoComponent } from './component/listar-presupuesto/listar-presupuesto.component';
import { PresupuestoComponent } from './component/presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoComponent,
    children: [
      {
        path: 'listar',
        component: ListarPresupuestoComponent
      },
      {
        path: 'borrar',
        component: BorrarPresupuestoComponent
      },
      {
        path: 'actualizar',
        component: ActualizarPresupuestoComponent
      },
      {
        path: 'crear',
        component: CrearPresupuestoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
