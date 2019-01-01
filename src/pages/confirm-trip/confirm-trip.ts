import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastrManager } from 'ng6-toastr-notifications';
/**
 * Generated class for the ConfirmTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-trip',
  templateUrl: 'confirm-trip.html',
})
export class ConfirmTripPage {

  constructor(public toastr: ToastrManager,public navCtrl: NavController, public navParams: NavParams) {
  }
  showSuccess() {
    this.toastr.successToastr('Your ride is confirmed.', 'Success!');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmTripPage');
  }
  confirm(){
    this.showSuccess();

  }
}
