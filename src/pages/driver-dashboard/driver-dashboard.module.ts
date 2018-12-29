import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverDashboardPage } from './driver-dashboard';

@NgModule({
  declarations: [
    DriverDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverDashboardPage),
  ],
})
export class DriverDashboardPageModule {}
