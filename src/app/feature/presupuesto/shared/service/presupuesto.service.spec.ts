import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Presupuesto } from '../model/presupuesto';

import { PresupuestoService } from './presupuesto.service';

describe('PresupuestoService', () => {
  let httpMock: HttpTestingController;
  let service: PresupuestoService;
  const apiEndpointPresupuestoConsulta = `${environment.endpoint}/presupuesto`;
  const apiEndpointPresupuesto = `${environment.endpoint}/presupuesto`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PresupuestoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PresupuestoService);
  });

  it('should be created', () => {
    const presupuestoService: PresupuestoService = TestBed.inject(PresupuestoService);
    expect(presupuestoService).toBeTruthy();
  });

  it('deberia listar presupuesto', () => {
    const dummyPresupuesto = [
      new Presupuesto(1, '94123', 500, '2022-01-01 10:00:00'),
      new Presupuesto(2, '94123', 500, '2022-01-01 10:00:00'),
    ];
    service.consultar().subscribe(presupuesto => {
      expect(presupuesto.length).toBe(2);
      expect(presupuesto).toEqual(dummyPresupuesto);
    });
    const req = httpMock.expectOne(apiEndpointPresupuestoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPresupuesto);
  });

  it('deberia crear un presupuesto', () => {
    const dummyPresupuesto = new Presupuesto(1, '94123', 500, '2022-01-01 10:00:00');
    service.guardar(dummyPresupuesto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPresupuesto);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualiza un presupuesto', () => {
    const dummyPresupuesto = new Presupuesto(1, '94123', 500, '2022-01-01 10:00:00');
    service.actualizar(dummyPresupuesto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPresupuesto}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un presupuesto', () => {
    const dummyPresupuesto = new Presupuesto(1, '94123', 500, '2022-01-01 10:00:00');
    service.eliminar(dummyPresupuesto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPresupuesto}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });


});
