import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Presupuesto } from '@presupuesto/shared/model/presupuesto';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ListarPresupuestoComponent } from './listar-presupuesto.component';

describe('ListarPresupuestoComponent', () => {
  let component: ListarPresupuestoComponent;
  let fixture: ComponentFixture<ListarPresupuestoComponent>;
  let presupuestoService: PresupuestoService;
  const listaPresupuestos: Presupuesto[] = 
  [
    new Presupuesto(1, '94123', 2000, '2022-01-01 10:00:00')
  , new Presupuesto(2, '94123', 2000, '2022-01-02 10:00:00')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPresupuestoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PresupuestoService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPresupuestoComponent);
    component = fixture.componentInstance;
    presupuestoService = TestBed.inject(PresupuestoService);
    spyOn(presupuestoService, 'consultar').and.returnValue(
      of(listaPresupuestos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarPresupuestos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
