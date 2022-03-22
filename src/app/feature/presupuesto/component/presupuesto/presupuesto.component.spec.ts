import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { PresupuestoComponent } from './presupuesto.component';

describe('PresupuestoComponent', () => {
  let component: PresupuestoComponent;
  let fixture: ComponentFixture<PresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoComponent ],
      providers: [NavbarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
