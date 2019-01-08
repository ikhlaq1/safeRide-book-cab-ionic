import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DriverAgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-agreement',
  templateUrl: 'driver-agreement.html',
})
export class DriverAgreementPage {
  agreeForm: FormGroup;
  public today;
  constructor(
    private alertCtrl: AlertController,
    fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.today = Date.now();
    this.agreeForm = fb.group({
      identify: [false, Validators.compose([Validators.required])],
      payment: [false, Validators.compose([Validators.required])],
      minfare: [false, Validators.compose([Validators.required])],
      onlineplatform: [false, Validators.compose([Validators.required])],
    });
  }
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  agree() {
    if (this.agreeForm.controls.identify.value == false) {
      this.presentAlert('Please check all the checkboxes');
      return false;
    }
     if (this.agreeForm.controls.minfare.value == false) {
      this.presentAlert('Please check all the checkboxes');
      return false;
    } if (this.agreeForm.controls.onlineplatform.value == false) {
      this.presentAlert('Please check all the checkboxes');
      return false;
    }
    console.log(this.agreeForm.value);
    this.navCtrl.push("SignaturePage")
    // this.addInfo()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverAgreementPage');
  }

}
