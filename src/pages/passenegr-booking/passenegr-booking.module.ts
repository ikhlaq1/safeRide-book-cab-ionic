import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassenegrBookingPage } from './passenegr-booking';

@NgModule({
  declarations: [
    PassenegrBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(PassenegrBookingPage),
  ],
})
export class PassenegrBookingPageModule {}
