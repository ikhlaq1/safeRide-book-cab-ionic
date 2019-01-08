import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { DriverAgreementPage } from '../pages/driver-agreement/driver-agreement';
import { VehicleInfoPage } from '../pages/vehicle-info/vehicle-info';

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
      { title: 'Book Driver', component: 'PassenegrBookingPage' },
      { title: 'Edit profile', component: 'EditProfilePage' },
      { title: 'My Bookings', component: 'MybookingPage' },
      { title: 'Share', component: 'SharescreenPage' },
      { title: 'support', component: 'SupportPage' },
      { title: 'Vehicle Info', component: 'VehicleInfoPage' },
      { title: 'Service ', component: 'DriverAgreementPage'},
      { title: 'log out', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
