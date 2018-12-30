import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-driver',
  templateUrl: 'register-driver.html',
})
export class RegisterDriverPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDriverPage');
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
