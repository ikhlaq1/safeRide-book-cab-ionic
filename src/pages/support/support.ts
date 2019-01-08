import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  public activate :boolean=true
  public deactivate :boolean=false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  activateAccount(){
    this.deactivate=true;
    this.activate=false
  }

  deactivateAccount(){
    this.deactivate=false;
    this.activate=true
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
