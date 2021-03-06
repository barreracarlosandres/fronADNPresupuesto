import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { GastoComponent } from '../gasto/gasto.component';

import { BorrarGastoComponent } from './borrar-gasto.component';

describe('BorrarGastoComponent', () => {
  let component: BorrarGastoComponent;
  let fixture: ComponentFixture<BorrarGastoComponent>;
  let gastoService : GastoService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarGastoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes(
          [{path: '', component: BorrarGastoComponent}, {path: 'gasto', component: GastoComponent}]
        )      
      ],
      providers: [GastoService, HttpService, NavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarGastoComponent);
    component = fixture.componentInstance;
    gastoService = TestBed.inject(GastoService);
    spyOn(gastoService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería borrar un gasto', () => {
    const dummyGasto = new Gasto(1, '94123', 100, '2022-01-01 10:00:00');
    component.borrar(dummyGasto);
    expect(component.borrar(dummyGasto)).toBe();
  });
  
});
