import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PassenegrBookingPage } from '../pages/passenegr-booking/passenegr-booking';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SharescreenPage } from '../pages/sharescreen/sharescreen';
import { SupportPage } from '../pages/support/support';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: 'PassenegrBookingPage' },
      { title: 'Edit profile', component: 'EditProfilePage' },
      { title: 'My Bookings', component: 'HomePage' },
      { title: 'Share', component: 'SharescreenPage' },
      { title: 'support', component: 'SupportPage' },
      { title: 'log out', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
