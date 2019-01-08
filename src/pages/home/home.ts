import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup;
  public loading;
  constructor(
    private toastr: ToastrManager,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public platform: Platform) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // this.map = new GoogleMap('map');
    // platform.ready().then(() => {
    //   this.loadMap();
    // });
  }
  ionViewDidLoad() {
    //   this.loadMap();
  }
  showError(msg) {
    this.toastr.errorToastr(msg);
  }
  onSubmit() {
    console.log(this.loginForm.value);
    let credentials = this.loginForm.value
    if (this.loginForm.invalid) {
      console.log("invalid");

      if (this.loginForm.controls.username.invalid) {
        console.log("username inavli");
        this.showError("enter valid email")
        return false;
      }
      if (this.loginForm.controls.password.invalid) {
        this.showError("enter valid password")
        return false;
      }
    }
    if (this.loginForm.valid) {
      console.log("in valod");
     // this.login(credentials)
    }
  }
  presentLoadingDefault() {
    console.log('in loader');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    this.loading.present();

  }
  
  login() {
    this.navCtrl.setRoot('PassenegrBookingPage');

    // this.presentLoadingDefault();
    // this.af.auth.signInWithEmailAndPassword(credentials.username, credentials.password).then(value => {
    //   this.showSuccess("Logged In")
    //   console.log(value.user["ra"]);
    //   this.loading.dismiss();
    //   this.navCtrl.setRoot('PassenegrBookingPage')
    // })
    //   .catch((e) => {
    //     console.log(e);
    //     if (e['code'] == "auth/user-not-found") {
    //   this.loading.dismiss();
    //       this.showError("No user registered with this email")

    //     }
    //     if (e['code'] == "auth/wrong-password") {
    //       this.loading.dismiss();
    //       this.showError("Password is wrong ")
    //     }
    //   })
  }
  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }
  onForgotPassword() {
    this.navCtrl.setRoot('ForgotPasswordPage')

  }
  public createDriverAccount() {
    this.navCtrl.setRoot('RegisterDriverPage')

  }

  public createNewAccount() {
    this.navCtrl.setRoot('RegisterPassengerPage')

  }
  // login() {
  //   this.navCtrl.setRoot('PassenegrBookingPage')
  // }
}
