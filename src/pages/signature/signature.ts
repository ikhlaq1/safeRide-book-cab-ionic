import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, normalizeURL, Content } from 'ionic-angular';
import { File, IWriteOptions } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
const STORAGE_KEY = 'IMAGE_LIST';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild('imageCanvas') canvas: any;
  canvasElement: any;
  signatureForm: FormGroup;
  public showIamsureConsent: boolean = false;
  public enableButton: boolean = false;
  public loading;
  private basePath: string = '/avatarPicture';

  saveX: number;
  saveY: number;

  storedImages = [];

  @ViewChild(Content) content: Content;
  @ViewChild('fixedContainer') fixedContainer: any;


  constructor(
    private file: File,
    private storage: Storage,
    public renderer: Renderer,
    private plt: Platform,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    fb: FormBuilder,
    public navCtrl: NavController,
     public navParams: NavParams) {
      this.signatureForm = fb.group({
        idecline: [false, Validators.compose([Validators.required])],
        iconsent: [false, Validators.compose([Validators.required])],
        iamsureconsent: [false, Validators.compose([Validators.required])],
  
      });
      this.storage.ready().then(() => {
        this.storage.get(STORAGE_KEY).then(data => {
          if (data != undefined) {
            this.storedImages = data;
          }
        });
      });
  }
  presentLoadingDefault() {
    console.log('in loader');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

  }
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  iconsent(event) {
    if (event.value == true) {
      this.showIamsureConsent = true;
      this.signatureForm.controls['idecline'].setValue(false)

    }
    if (event.value == false) {
      this.showIamsureConsent = false;

    }
  }
  iamsureconsent(event) {
    if (event.value == true) {
      this.enableButton = true;
      this.signatureForm.controls['idecline'].setValue(false)

    }
    if (event.value == false) {
      this.enableButton = false;

    }
  }
  idecline(event) {
    if (event.value == true) {
      console.log("in decline");

      this.signatureForm.controls['iconsent'].setValue(false)
      this.signatureForm.controls['iamsureconsent'].setValue(false)

      this.enableButton = false;
    }
    if (event.value == false) {
      this.enableButton = true;

    }
  }
  agree() {
    this.saveCanvasImage();
    // this.addInfo()
  }
  ionViewDidEnter() {
    let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
    let scroll = this.content.getScrollElement();

    itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
    scroll.style.marginTop = itemHeight + 'px';
  }
  startDrawing(ev) {
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.touches[0].pageX - canvasPosition.x;
    this.saveY = ev.touches[0].pageY - canvasPosition.y;
  }

  moved(ev) {
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.stroke();
    this.saveX = currentX;
    this.saveY = currentY;
  }

  saveCanvasImage() {
    this.loading.present();
    var dataUrl = this.canvasElement.toDataURL();
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    let name = new Date().getTime() + '.png';
    let path = this.file.dataDirectory;
    let options: IWriteOptions = { replace: true };
    var data = dataUrl.split(',')[1];
    let blob = this.b64toBlob(data, 'image/png');
    // this.uploadToFirebase(blob).then((uploadSnapshot: any) => {
    //   this.presentAlert("Signature Uploaded Succesfully")
    //   return this.saveToDatabase(uploadSnapshot);//store reference to storage in database
    // }).then((_uploadSnapshot: any) => {
    //   this.presentAlert('file saved to asset catalog successfully  ');

    // }, (_error) => {
    //   this.presentAlert('Error ' + (_error.message || _error));
    //   this.loading.dismiss();
    // });
  }
  
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  // uploadToFirebase(imgBlob: any) {
  //   var randomNumber = Math.floor(Math.random() * 256);
  //   console.log('Random number : ' + randomNumber);
  //   return new Promise((resolve, reject) => {
  //     let storageRef = firebase.storage().ref(this.basePath + randomNumber + '.jpg');//Firebase storage main path

  //     let metadata: firebase.storage.UploadMetadata = {
  //       contentType: 'image/jpeg',
  //     };

  //     let uploadTask = storageRef.put(imgBlob, metadata);
  //     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //       (snapshot) => {
  //         console.log({ snapshot });

  //         let progress = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100
  //         console.log(progress);
  //       },
  //       (error) => {
  //         // upload failed
  //         console.log(error);
  //         //reject(error);
  //       },
  //       () => {
  //         let url = uploadTask.snapshot.downloadURL;
  //         console.log('Saved picture url', url);
  //         resolve(uploadTask['snapshot']);
  //       });
  //   });
  // }

  // saveToDatabase(uploadSnapshot) {

  //   return new Promise((resolve, reject) => {
  //     var dataToSave = {
  //       // 'URL': uploadSnapshot.downloadURL, // url to access file
  //       'name': uploadSnapshot.metadata.name, // name of the file
  //       'lastUpdated': new Date().getTime(),
  //     };
  //     this.af.authState.subscribe(auth => {
  //       this.afd.object(`profile/${auth.uid}/myProfile/assets`).set(dataToSave);
  //       this.afd.object(`profile/${auth.uid}/myProfile`).update({ servicetermsAccepted: true })
  //       this.loading.dismiss();
  //       this.navCtrl.setRoot('DashboardPage')

  //     }), (err) => {
  //       this.loading.dismiss();
  //       this.presentAlert("Something Went Wrong")
  //     }

  //   });
  // }
  ionViewDidLoad() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 200;

  }

}
