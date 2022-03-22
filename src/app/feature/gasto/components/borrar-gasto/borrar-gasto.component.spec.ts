import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarGastoComponent } from './borrar-gasto.component';

describe('BorrarGastoComponent', () => {
  let component: BorrarGastoComponent;
  let fixture: ComponentFixture<BorrarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarGastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
