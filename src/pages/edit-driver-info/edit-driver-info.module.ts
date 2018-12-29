import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDriverInfoPage } from './edit-driver-info';

@NgModule({
  declarations: [
    EditDriverInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDriverInfoPage),
  ],
})
export class EditDriverInfoPageModule {}
