import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { BorrarPresupuestoComponent } from './component/borrar-presupuesto/borrar-presupuesto.component';
import { ListarPresupuestoComponent } from './component/listar-presupuesto/listar-presupuesto.component';
import { CrearPresupuestoComponent } from './component/crear-presupuesto/crear-presupuesto.component';
import { PresupuestoComponent } from './component/presupuesto/presupuesto.component';
import { SharedModule } from '@shared/shared.module';
import { ActualizarPresupuestoComponent } from './component/actualizar-presupuesto/actualizar-presupuesto.component';
import { PresupuestoService } from './shared/service/presupuesto.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PresupuestoComponent,
    ListarPresupuestoComponent,    
    BorrarPresupuestoComponent,
    ActualizarPresupuestoComponent,
    CrearPresupuestoComponent,
  ],
  imports: [
    SharedModule,
    PresupuestoRoutingModule
  ],
  providers: [PresupuestoService],
})
export class PresupuestoModule { }
