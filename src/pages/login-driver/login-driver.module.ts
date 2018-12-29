import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginDriverPage } from './login-driver';

@NgModule({
  declarations: [
    LoginDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginDriverPage),
  ],
})
export class LoginDriverPageModule {}
