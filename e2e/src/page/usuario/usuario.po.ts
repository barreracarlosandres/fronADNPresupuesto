import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.id('boton_crear_usaurio'));
    //private linkActualizarUsuario = element.all(by.('usuario'));
    private botonUsuario = element(by.name('botton_crear_usuario'));
    private inputNombreUsuario = element(by.id('nombreUsuario'));
    private inputApellidoUsuario = element(by.id('apellidoUsuario'));
    private inputIdentificacionUsuario = element(by.id('identificacionUsuario'));
    private listaUsuarios = element.all(by.css('tbody.usuarios tr'));    
    private botonGuardarUsuario = element(by.id('form_crear_usuario'));
    private clickActualizarUsuario = element(by.buttonText('Actualizar'));
    private clickElimiarUsuario = element(by.buttonText('Elimiar'));
    private botonActualziarUsuario = element(by.id('form_actualizar_usuario'));

    async clickBotonCrearUsuarios() {
        await this.linkCrearUsuario.click();
    }

    async clickBotonActualizarUsuario() {    
        await this.clickActualizarUsuario.click();
    }

    async clickBotonElimiarUsuario() {    
        await this.clickElimiarUsuario.click();
    }

    async submitActualizarUsaurio(){
        await this.botonActualziarUsuario.submit();
    }

    async clickBotonListarUsuarios() {
        await this.botonUsuario.click();
    }

    async ingresarNombre(nombreUsuario) {        
        await this.inputNombreUsuario.sendKeys(nombreUsuario);
    }

    async ingresarApellido(apellidoUsuario) {        
        await this.inputApellidoUsuario.sendKeys(apellidoUsuario);
    }

    async ingresarIdentificacion(identificacionUsuario) {        
        await this.inputIdentificacionUsuario.sendKeys(identificacionUsuario);
    }

    async contarUsuarios() {
        return this.listaUsuarios.count();
    }

    clickGuardarUsuarios() {
        return this.botonGuardarUsuario.submit();
    }
}
