import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.id('linkCrearUsuario'));
    private linkListarUsuario = element(by.id('linkListarUsuario'));
    private inputNombreUsuario = element(by.id('nombreUsuario'));
    private inputApellidoUsuario = element(by.id('apellidoUsuario'));
    private inputIdentificacionUsuario = element(by.id('identificacionUsuario'));
    //private listaUsuarios = element.all(by.css('ul.usuario li'));

    async clickBotonCrearUsuarios() {
        await this.linkCrearUsuario.click();
    }

    async clickBotonListarUsuarios() {
        await this.linkListarUsuario.click();
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

    /*async contarUsuarios() {
        return this.listaUsuarios.count();
    }*/
}
