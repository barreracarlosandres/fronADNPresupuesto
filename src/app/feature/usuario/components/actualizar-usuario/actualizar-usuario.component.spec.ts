import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { SharedModule } from '@shared/shared.module';
import { ActualizarUsuarioComponent } from './actualizar-usuario.component';
import { UsuarioComponent } from '@usuario/components/usuario/usuario.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Usuario } from '@usuario/shared/model/usuario';
import { of } from 'rxjs';

describe('ActualizarUsuarioComponent', () => {
  let component: ActualizarUsuarioComponent;
  let fixture: ComponentFixture<ActualizarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUsuarioComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: ActualizarUsuarioComponent}, {path: 'usuario', component: UsuarioComponent}]
        )
      ],
      providers: [UsuarioService, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarUsuarioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizar usuario', () => {
    const usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
    expect(component.actualizarForm.valid).toBeFalsy();
    component.actualizarForm.controls.id.setValue('1');
    component.actualizarForm.controls.nombre.setValue('Juan Carlos');
    component.actualizarForm.controls.apellido.setValue('Perez');
    component.actualizarForm.controls.identificacionUsuario.setValue('123');
    expect(component.actualizarForm.valid).toBeTruthy();    
    expect(component.actualizar()).toBe();
    fixture.detectChanges();    
  });

  it('debería actualizar un usuario', () => {
    const dummyUsuario = new Usuario('1','Carlos','Barrera','94123');
    component.datosActualizar(dummyUsuario);    
    expect(component.actualizar()).toBe();
    component.ocultar();   
  });

  it('No debería actualizar un Usuario', () => {
    const dummyUsuario = new Usuario('1','Carlos *','Barrera','94123');
    component.datosActualizar(dummyUsuario);    
    expect(component.actualizar()).toBe();
  });

});
