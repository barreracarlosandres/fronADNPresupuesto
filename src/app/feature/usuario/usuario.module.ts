import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SharedModule } from '@shared/shared.module';
import { UsuarioService } from './shared/service/usuario.service';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    BorrarUsuarioComponent,
    ActualizarUsuarioComponent,
    UsuarioComponent    
  ],
  imports: [
    UsuarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
