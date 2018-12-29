import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmTripPage } from './confirm-trip';

@NgModule({
  declarations: [
    ConfirmTripPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmTripPage),
  ],
})
export class ConfirmTripPageModule {}
