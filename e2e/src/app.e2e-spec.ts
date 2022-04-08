import { AppPage } from './app.po';
//import { NavbarPage } from './page/navbar/navbar.po';

describe('workspace-project App', () => {
  let page: AppPage;
  //let navBar: NavbarPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {    
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Presupuesto');
  });

  it('Debería valdar texto página home', () => {    
    page.navigateTo();        
    expect(page.getHomeText()).toEqual('home works!');
  });

  /*it('Debería valdar link usuario', () => {    
    page.navigateTo();            
    expect(navBar.clickLinkHome().getHomeText()).toEqual('home');
    //expect(page.getHomeText()).toEqual('home works!');
    //expect(navBar.clickBotonUsuarios()).toEqual('usuario');
  });*/

  /*afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });*/
});
