import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  token: string;

  relationship: string = "pesos";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServicesProvider) {
    this.service.getToken().subscribe(x => {
      console.log('TOKEN', x)
      this.token = JSON.parse(x["_body"])["access_token"];
    });
  }
  
  getClient(){
    this.service.getDatosCliente()
  }
  
  
  ionViewDidLoad() {
    this.service.getToken();
    console.log('ionViewDidLoad AdminPage');
  }

}
