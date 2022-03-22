import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { HttpService } from '@core/services/http.service';
import { PresupuestoService } from '@presupuesto/shared/service/presupuesto.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
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
        RouterTestingModule        
      ],
      providers: [PresupuestoService, HttpService, NavbarComponent]
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
});
