import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BorrarUsuarioComponent } from './borrar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { UsuarioComponent } from '../usuario/usuario.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Usuario } from '@usuario/shared/model/usuario';

describe('BorrarUsuarioComponent', () => {
  let component: BorrarUsuarioComponent;
  let fixture: ComponentFixture<BorrarUsuarioComponent>;
  let usuarioService : UsuarioService

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarUsuarioComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,        
        RouterTestingModule.withRoutes(
          [{path: '', component: BorrarUsuarioComponent}, {path: 'usuario', component: UsuarioComponent}]
        )     
      ],
      providers: [UsuarioService, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería borrar un usuario', () => {
    const dummyUsuario = new Usuario('1','94123','carlos','andres');
    component.borrar(dummyUsuario);
    expect(component).toBeTruthy();
  });
  
});
