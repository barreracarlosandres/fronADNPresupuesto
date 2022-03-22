import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NavbarComponent } from "@core/components/navbar/navbar.component";
import { HttpService } from "@core/services/http.service";
import { SharedModule } from "@shared/shared.module";
import { Usuario } from "@usuario/shared/model/usuario";
import { UsuarioService } from "@usuario/shared/service/usuario.service";
import { of } from "rxjs";
import { ListarUsuarioComponent } from "./listar-usuario.component";
import { MatButtonModule } from '@angular/material/button';

describe('ListarUsuarioComponent', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;
  let usuarioService: UsuarioService;
  const listaUsuarios: Usuario[] = 
  [
    new Usuario('1', 'nombre 1', 'apellido 1', '94123')
  , new Usuario('2', 'nombre 2', 'apellido 2', '94234')
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent],      
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        MatButtonModule
      ],
      providers: [UsuarioService, HttpService, NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'consultar').and.returnValue(
      of(listaUsuarios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaUsuarios.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
