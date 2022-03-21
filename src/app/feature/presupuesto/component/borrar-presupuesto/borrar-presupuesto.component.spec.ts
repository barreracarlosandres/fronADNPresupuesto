import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPresupuestoComponent } from './borrar-presupuesto.component';

describe('BorrarPresupuestoComponent', () => {
  let component: BorrarPresupuestoComponent;
  let fixture: ComponentFixture<BorrarPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPresupuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
