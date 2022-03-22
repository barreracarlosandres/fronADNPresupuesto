import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioComponent } from './usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from '@core/components/navbar/navbar.component';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [NavbarComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
