import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { Gasto } from '@gasto/shared/model/gasto';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ListarGastoComponent } from './listar-gasto.component';

describe('ListarGastoComponent', () => {
  let component: ListarGastoComponent;
  let fixture: ComponentFixture<ListarGastoComponent>;
  let gastosService: GastoService;
  const listaGastos: Gasto[] = 
  [
    new Gasto(1, '94123', 200, '2022-01-01 10:00:00')
  , new Gasto(2, '94123', 200, '2022-01-01 10:00:00')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGastoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PresupuestoService, HttpService, NavbarComponent]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGastoComponent);
    component = fixture.componentInstance;
    gastosService = TestBed.inject(GastoService);
    spyOn(gastosService, 'consultar').and.returnValue(
      of(listaGastos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarGastos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
