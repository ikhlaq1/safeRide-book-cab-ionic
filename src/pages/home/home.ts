import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions, CameraPosition,MarkerOptions,Marker,Environment} from '@ionic-native/google-maps';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  constructor(public navCtrl: NavController, public platform: Platform) {
    // this.map = new GoogleMap('map');
    // platform.ready().then(() => {
    //   this.loadMap();
    // });
  }
  ionViewDidLoad() {
 //   this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
  
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  login() {
    this.navCtrl.setRoot('PassenegrBookingPage')
  }
}
