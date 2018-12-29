import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleInfoPage } from './vehicle-info';

@NgModule({
  declarations: [
    VehicleInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleInfoPage),
  ],
})
export class VehicleInfoPageModule {}
