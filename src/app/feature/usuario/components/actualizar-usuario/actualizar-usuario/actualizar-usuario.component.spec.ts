import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';


import { ActualizarUsuarioComponent } from './actualizar-usuario.component';

describe('ActualizarUsuarioComponent', () => {
  let component: ActualizarUsuarioComponent;
  let fixture: ComponentFixture<ActualizarUsuarioComponent>;
  let usuarioService: UsuarioService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUsuarioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [UsuarioService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
