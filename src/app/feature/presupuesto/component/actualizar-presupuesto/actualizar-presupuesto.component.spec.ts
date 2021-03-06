import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { PresupuestoComponent } from '../presupuesto/presupuesto.component';

import { ActualizarPresupuestoComponent } from './actualizar-presupuesto.component';

describe('ActualizarPresupuestoComponent', () => {
  let component: ActualizarPresupuestoComponent;
  let fixture: ComponentFixture<ActualizarPresupuestoComponent>;
  let presupuestoService: PresupuestoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPresupuestoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: ActualizarPresupuestoComponent}, {path: 'presupuesto', component: PresupuestoComponent}]
        )
      ],
      providers: [PresupuestoService, HttpService, NavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPresupuestoComponent);
    component = fixture.componentInstance;
    presupuestoService = TestBed.inject(PresupuestoService);
    spyOn(presupuestoService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizar presupuesto', () => {
    expect(component.actualizarForm.valid).toBeFalsy();
    component.actualizarForm.controls.id.setValue('1');
    component.actualizarForm.controls.identificacionUsuario.setValue('123');
    component.actualizarForm.controls.valorPresupuesto.setValue(5000);
    component.actualizarForm.controls.fechaPresupuesto.setValue('2022-01-01 10:00:00');    
    expect(component.actualizarForm.valid).toBeTruthy();
    expect(component.actualizar()).toBe();
    fixture.detectChanges();    
  });

  it('deber??a ocultar componente', () => {
      component.ocultar();
      expect(component.ocultar()).toBe();
  });

  it('deber??a actualizar los datos de del presupuesto', () => {
    const dummyPresupuesto = new Presupuesto(1, '94123', 500, '2022-01-01 10:00:00');
    component.datosActualizar(dummyPresupuesto);
    expect(component.datosActualizar(dummyPresupuesto)).toBe();
});

});

