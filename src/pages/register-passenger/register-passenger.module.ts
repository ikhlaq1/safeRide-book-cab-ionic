import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPassengerPage } from './register-passenger';

@NgModule({
  declarations: [
    RegisterPassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPassengerPage),
  ],
})
export class RegisterPassengerPageModule {}
