import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDriverPage } from './register-driver';

@NgModule({
  declarations: [
    RegisterDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDriverPage),
  ],
})
export class RegisterDriverPageModule {}
