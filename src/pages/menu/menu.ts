import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';

import { LoginPage } from './../login/login';
import { UserPage } from './../user/user';
import { AdminPage } from './../admin/admin';
import { UserSecondPage } from './../user-second/user-second';
import { AdminSecondPage } from './../admin-second/admin-second';
import { SegurosPage } from './../seguros/seguros';
import { AyudaPage } from './../ayuda/ayuda';

import { AuthProvider } from './../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  pages = [];
  username = '';
 
  // Reference to the side menus root nav
  @ViewChild(Nav) nav: Nav;
 
  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private appCtrl: App) {
  }
 
  ionViewWillEnter() {
    if (this.authProvider.isAdmin()) {
      this.pages = [
        { title: 'Resumen de Cuentas', page: AdminPage, icon: 'home' },
        { title: 'Seguros y Polizas', page: SegurosPage, icon: 'home' },
        { title: 'Noticias', page: AdminSecondPage , icon: 'planet' },
        { title: 'Ayuda (FAQs)', page: AyudaPage , icon: 'planet' }
      ];
      this.openPage(AdminPage);
    } else {
      this.pages = [
        { title: 'User Dashboard', page: UserPage, icon: 'home' },
        { title: 'User Second Page', page: UserSecondPage , icon: 'planet' }
      ];
      this.openPage(UserPage);
    }
    this.username = this.authProvider.currentUser.name;
  }
 
  logout() {
    this.authProvider.logout();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
 
  openPage(page) {
    this.nav.setRoot(page);
  }
 
  ionViewCanEnter() {
    return this.authProvider.isLoggedIn();
  }
 
}
