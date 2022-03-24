import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { UsuarioPage } from '../page/usuario/usuario.po';


describe('workspace-project Usuario', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let usuario: UsuarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        usuario = new UsuarioPage();
    });

    it('Deberia crear usuario', () => {
        const NOMBRE = 'nombre1';
        const APELLIDO = 'apellido1';
        const IDENTIFICACION_USUARIO = '94123';


        page.navigateTo();
        navBar.clickBotonUsuarios();        
        usuario.clickBotonCrearUsuarios();
        usuario.ingresarNombre(NOMBRE);
        usuario.ingresarApellido(APELLIDO);
        usuario.ingresarIdentificacion(IDENTIFICACION_USUARIO);
        // Adicionamos las validaciones despues de la creación
        //expect('nombre2').toEqual(NOMBRE);
    });

    it('Deberia listar usuarios', () => {
        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuario.clickBotonListarUsuarios();

        expect(0).toBe(usuario.contarUsuarios());
    });
});
