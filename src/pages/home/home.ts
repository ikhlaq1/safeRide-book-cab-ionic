import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment
} from '@ionic-native/google-maps';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { RegisterDriverPage } from '../register-driver/register-driver';
import { RegisterPassengerPage } from '../register-passenger/register-passenger';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
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
