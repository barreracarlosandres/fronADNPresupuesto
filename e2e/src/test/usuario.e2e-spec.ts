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

    it('Deberia listar usuarios', () => {
        page.navigateTo();        
        navBar.clickBotonUsuarios();
        expect(0).toBe(usuario.contarUsuarios());
    });

    it('Deberia crear usuario', () => {
        const NOMBRE = 'nombre';
        const APELLIDO = 'apellido';
        const IDENTIFICACION_USUARIO = '94123';

        navBar.clickBotonUsuarios();        
        usuario.clickBotonCrearUsuarios();
        usuario.ingresarNombre(NOMBRE);
        usuario.ingresarApellido(APELLIDO);
        usuario.ingresarIdentificacion(IDENTIFICACION_USUARIO);
        usuario.clickGuardarUsuarios();        
        expect(1).toBe(usuario.contarUsuarios());
    });

    it('Deberia actualizar usuario', () => {
        const NOMBRE = '  completo';
        const APELLIDO = ' completo';

        navBar.clickBotonUsuarios();
        usuario.clickBotonActualizarUsuario();
        usuario.ingresarNombre(NOMBRE);
        usuario.ingresarApellido(APELLIDO);     
        usuario.submitActualizarUsaurio();
        expect(1).toBe(usuario.contarUsuarios());
    });

    it('Deberia eleimiar usuario', () => {
        navBar.clickBotonUsuarios();
        usuario.clickBotonElimiarUsuario();
        expect(0).toBe(usuario.contarUsuarios());
    });

});
