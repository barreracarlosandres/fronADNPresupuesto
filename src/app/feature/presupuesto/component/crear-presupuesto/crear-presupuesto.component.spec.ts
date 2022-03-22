import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { CrearPresupuestoComponent } from './crear-presupuesto.component';
import { NavbarComponent } from '@core/components/navbar/navbar.component';

describe('CrearPresupuestoComponent', () => {
  let component: CrearPresupuestoComponent;
  let fixture: ComponentFixture<CrearPresupuestoComponent>;
  let presupuestoService: PresupuestoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPresupuestoComponent ],
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
    fixture = TestBed.createComponent(CrearPresupuestoComponent);
    component = fixture.componentInstance;
    presupuestoService = TestBed.inject(PresupuestoService);
    spyOn(presupuestoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.presupuestoForm.valid).toBeFalsy();
  });

  it('Registrando presupuesto', () => {
    expect(component.presupuestoForm.valid).toBeFalsy();
    component.presupuestoForm.controls.id.setValue(1);
    component.presupuestoForm.controls.identificacionUsuario.setValue('94303');
    component.presupuestoForm.controls.valorPresupuesto.setValue(5000);
    component.presupuestoForm.controls.fechaPresupuesto.setValue('2022-01-01 10:00:00');    
    expect(component.presupuestoForm.valid).toBeTruthy();
    expect(component.crear()).toBe();
    fixture.detectChanges();   

    //component.crear();
    //expect( spyOn(usuarioService, 'guardar').and.callThrough()).toBeTruthy;

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

});
