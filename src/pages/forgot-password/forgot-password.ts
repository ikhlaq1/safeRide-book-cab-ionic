import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  goBack() {
    this.navCtrl
      .setRoot(HomePage)
      .then(() => {

        const index = this.viewCtrl.index;

        for (let i = index; i > 0; i--) {
          this.navCtrl.remove(i);
        }

      });
  }

}
