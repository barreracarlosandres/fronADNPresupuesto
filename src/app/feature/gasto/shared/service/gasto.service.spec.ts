import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Gasto } from '../model/gasto';
import { GastoService } from './gasto.service';

describe('GastoService', () => {
  let service: GastoService;
  let httpMock: HttpTestingController;
  const apiEndpointGastoConsulta = `${environment.endpoint}/gastos`;
  const apiEndpointGasto = `${environment.endpoint}/gastos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GastoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(GastoService);
  });

  it('should be created', () => {
    const gastoService: GastoService = TestBed.inject(GastoService);
    expect(gastoService).toBeTruthy();
  });

  it('deberia listar gastos', () => {
    const dummyGastos = [
      new Gasto(1, '94123', 200, '2022-01-01 10:00:00'),
      new Gasto(2, '94123', 200, '2022-01-01 10:00:00'),
    ];
    service.consultar().subscribe(gastos => {
      expect(gastos.length).toBe(2);
      expect(gastos).toEqual(dummyGastos);
    });
    const req = httpMock.expectOne(apiEndpointGastoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyGastos);
  });

  it('deberia crear un gasto', () => {
    const dummyGasto = new Gasto(1, '94123', 100, '2022-01-01 10:00:00');
    service.guardar(dummyGasto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointGasto);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualiza un gasto', () => {
    const dummyGasto = new Gasto(1, '94123', 200, '2022-01-01 10:00:00');
    service.actualizar(dummyGasto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointGasto}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un gasto', () => {
    const dummyGasto = new Gasto(1, '94123', 200, '2022-01-01 10:00:00');
    service.eliminar(dummyGasto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointGasto}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
