import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { SharedModule } from '@shared/shared.module';
import { GastoComponent } from './gasto.component';

describe('GastoComponent', () => {
  let component: GastoComponent;
  let fixture: ComponentFixture<GastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoComponent ],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule
      ],  
      providers: [NavbarComponent] ,
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
