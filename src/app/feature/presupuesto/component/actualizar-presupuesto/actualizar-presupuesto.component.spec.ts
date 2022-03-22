import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

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
        FormsModule
      ],
      providers: [PresupuestoService, HttpService, NavbarComponent],
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
});
