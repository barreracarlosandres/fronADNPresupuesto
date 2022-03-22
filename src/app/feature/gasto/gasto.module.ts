import { NgModule } from '@angular/core';
import { GastoRoutingModule } from './gasto-routing.module';
import { ListarGastoComponent } from './components/listar-gasto/listar-gasto.component';
import { BorrarGastoComponent } from './components/borrar-gasto/borrar-gasto.component';
import { ActualizarGastoComponent } from './components/actualizar-gasto/actualizar-gasto.component';
import { CrearGastoComponent } from './components/crear-gasto/crear-gasto.component';
import { SharedModule } from '@shared/shared.module';
import { GastoComponent } from './components/gasto/gasto.component';
import { GastoService } from './shared/service/gasto.service';


@NgModule({
  declarations: [
    ListarGastoComponent,
    BorrarGastoComponent,
    ActualizarGastoComponent,
    CrearGastoComponent,
    GastoComponent
  ],
  imports: [
    SharedModule,
    GastoRoutingModule
  ],
  providers: [GastoService]
})
export class GastoModule { }
