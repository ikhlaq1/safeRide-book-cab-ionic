import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the SharescreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharescreen',
  templateUrl: 'sharescreen.html',
})
export class SharescreenPage {

  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharescreenPage');
  }
  twitterShare(index) {
    var msg = "My favorite driver code from pre book app is SR 234";
    this.socialSharing.shareViaTwitter(msg, null, null);
  }

  facebookShare(index) {
    var msg = "My favorite driver code from pre book app is SR 234";
    this.socialSharing.shareViaFacebook(msg, null, null);
  }

  whatsappShare(index) {
    var msg = "My favorite driver code from pre book app is SR 234";
    this.socialSharing.shareViaWhatsApp(msg, null, null);
  }

  regularShare(index) {
    var msg = "My favorite driver code from pre book app is SR 234";
    this.socialSharing.share(msg, null, null, null);
  }

}
