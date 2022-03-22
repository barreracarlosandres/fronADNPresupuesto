import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { GastoService } from '@gasto/shared/service/gasto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { CrearGastoComponent } from './crear-gasto.component';

describe('CrearGastoComponent', () => {
  let component: CrearGastoComponent;
  let fixture: ComponentFixture<CrearGastoComponent>;
  let gastoService: GastoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGastoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [GastoService, HttpService, NavbarComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGastoComponent);
    component = fixture.componentInstance;
    gastoService = TestBed.inject(GastoService);
    spyOn(gastoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.gastoForm.valid).toBeFalsy();
  });

  it('Registrando usuario', () => {
    expect(component.gastoForm.valid).toBeFalsy();
    component.gastoForm.controls.id.setValue(1);
    component.gastoForm.controls.identificacionUsuario.setValue('94303');
    component.gastoForm.controls.valorGasto.setValue(200);    
    component.gastoForm.controls.fechaGasto.setValue('2022-01-01 10:00:00');
    expect(component.gastoForm.valid).toBeTruthy();
    expect(component.crear()).toBe();
    fixture.detectChanges();   
  });

});
