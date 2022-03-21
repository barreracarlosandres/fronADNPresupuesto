import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BorrarUsuarioComponent } from './borrar-usuario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';


describe('BorrarUsuarioComponent', () => {
  let component: BorrarUsuarioComponent;
  let fixture: ComponentFixture<BorrarUsuarioComponent>;
  let usuarioService : UsuarioService

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarUsuarioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule        
      ],
      providers: [UsuarioService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
