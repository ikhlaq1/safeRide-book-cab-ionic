import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybookingPage } from './mybooking';

@NgModule({
  declarations: [
    MybookingPage,
  ],
  imports: [
    IonicPageModule.forChild(MybookingPage),
  ],
})
export class MybookingPageModule {}
