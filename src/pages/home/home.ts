import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public platform: Platform) {
    // this.map = new GoogleMap('map');
    // platform.ready().then(() => {
    //   this.loadMap();
    // });
  }
  ionViewDidLoad() {
    //   this.loadMap();
  }

  onForgotPassword() {
    this.navCtrl.setRoot('ForgotPasswordPage')

  }
  public createDriverAccount() {
    this.navCtrl.setRoot('RegisterDriverPage')

  }

  public createNewAccount() {
    this.navCtrl.setRoot('RegisterPassengerPage')

  }
  login() {
    this.navCtrl.setRoot('PassenegrBookingPage')
  }
}
