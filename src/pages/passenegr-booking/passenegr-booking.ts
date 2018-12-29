import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-passenegr-booking',
  templateUrl: 'passenegr-booking.html',
})
export class PassenegrBookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassenegrBookingPage');
  }

  pushtoconfirm(){
    this.navCtrl.push('ConfirmTripPage');
  }

}
