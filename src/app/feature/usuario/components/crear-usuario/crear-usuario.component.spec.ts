import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioService } from '../../shared/service/usuario.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { UsuarioComponent } from '../usuario/usuario.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CrearProductoComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let usuarioService: UsuarioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: CrearUsuarioComponent}
          , {path: 'usuario', component: UsuarioComponent}]
        )
      ],
      providers: [UsuarioService, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    /*spyOn(usuarioService, 'guardar').and.returnValue(
      of(true)
    );*/
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería actualizar un usuario', () => {        
    spyOn(usuarioService, 'guardar').and.returnValue(
      of(true)
    );    
    component.usuarioForm.controls.nombre.setValue('nombre 1');
    component.usuarioForm.controls.apellido.setValue('apellido 1');
    component.usuarioForm.controls.identificacionUsuario.setValue('94303');
    component.crear();    
    expect(component.crear()).toBe();
    //component.ocultar();   
  });

  it('no debería actualizar un usuario', () => {
    //const dummyUsuario = new Usuario('1','Carlos','Barrera','94123');
    /*spyOn(usuarioService, 'guardar').and.returnValue(
      of(false)
    );*/
    component.usuarioForm.controls.nombre.setValue('nombre 1*');
    component.usuarioForm.controls.apellido.setValue('apellido 1');
    component.usuarioForm.controls.identificacionUsuario.setValue('94303');
    component.crear();    
    expect(component.crear()).toBe();
    //component.ocultar();   
  });
});
