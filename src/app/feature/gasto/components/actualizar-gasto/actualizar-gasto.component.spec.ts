import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { GastoComponent } from '../gasto/gasto.component';
import { ActualizarGastoComponent } from './actualizar-gasto.component';


describe('ActualizarGastoComponent', () => {
  let component: ActualizarGastoComponent;
  let fixture: ComponentFixture<ActualizarGastoComponent>;
  let gastoService: GastoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarGastoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: ActualizarGastoComponent}, {path: 'gasto', component: GastoComponent}]
        )
      ],
      providers: [GastoService, HttpService, NavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGastoComponent);
    component = fixture.componentInstance;
    gastoService = TestBed.inject(GastoService);
    spyOn(gastoService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizar gasto', () => {
    expect(component.actualizarForm.valid).toBeFalsy();
    component.actualizarForm.controls.id.setValue(1);
    component.actualizarForm.controls.valorGasto.setValue(20);
    component.actualizarForm.controls.fechaGasto.setValue('2022-01-01 10:00:00');
    component.actualizarForm.controls.identificacionUsuario.setValue('94123');
    expect(component.actualizarForm.valid).toBeTruthy();
    expect(component.actualizar()).toBe();
    fixture.detectChanges();
  });

  it('debería actualizar un gasto', () => {
    const dummyGasto = new Gasto(1, '94123', 100, '2022-01-01 10:00:00');
    component.datosActualizar(dummyGasto);    
    expect(component.actualizar()).toBe();
    component.ocultar();
  });

});
