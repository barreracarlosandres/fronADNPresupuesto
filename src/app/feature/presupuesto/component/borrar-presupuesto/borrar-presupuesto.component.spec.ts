import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { PresupuestoComponent } from '../presupuesto/presupuesto.component';
import { BorrarPresupuestoComponent } from './borrar-presupuesto.component';

describe('BorrarPresupuestoComponent', () => {
  let component: BorrarPresupuestoComponent;
  let fixture: ComponentFixture<BorrarPresupuestoComponent>;
  let presupuestoService : PresupuestoService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPresupuestoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: BorrarPresupuestoComponent}, {path: 'presupuesto', component: PresupuestoComponent}]
        )        
      ],
      providers: [PresupuestoService, HttpService, NavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPresupuestoComponent);
    component = fixture.componentInstance;
    presupuestoService = TestBed.inject(PresupuestoService);
    spyOn(presupuestoService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería borrar un presupuesto', () => {
    const dummyPresupuesto = new Presupuesto(1, '94123', 100, '2022-01-01 10:00:00');
    component.borrar(dummyPresupuesto); 
    expect(component.borrar(dummyPresupuesto)).toBe();   
  });

});
