import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPresupuesto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkGasto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonUsuarios() {
        await this.linkUsuario.click();
    }

    async clickLinkHome() {
        await this.linkHome.click();
    }
}
