import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

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
        RouterTestingModule        
      ],
      providers: [GastoService, HttpService]
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
});
