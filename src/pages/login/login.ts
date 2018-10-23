import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { PerfilPage } from './../perfil/perfil';
//import { MenuPage } from './../menu/menu';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  user = {
    name: 'admin',
    pw: 'admin'
  };
 
  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController) { }
 
  loginUser() {
    this.authProvider.login(this.user.name, this.user.pw).then(success => {
      if (success) {
        this.navCtrl.setRoot(PerfilPage);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login failed',
          message: 'Please check your credentials',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
}
