import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AlertController, Platform} from 'ionic-angular';
import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  storageBtn = false;
  devices: any;
  

constructor(
  private alertCtrl: AlertController,
  private device: Device,
  public platform: Platform,
  private viewCtrl: ViewController,
  public storage: Storage
){ 
  // this.platform = platform;
  // this.storage = storage;
 }


onYesAlert(){
  const alert = this.alertCtrl.create({
    title:  ''+this.device.manufacturer, 
    message: 'Your model is: ' + this.device.model,
      buttons: [{
      text: 'OK',
      handler: () => {  
        this.storage.set('Model', '123'); 
        // this.device.model
        this.storage.set('Manufacturer', '456');
        // this.device.manufacturer  
        console.log(this.device.model, this.device.manufacturer);
    }
    },
    ]
    });
    alert.present();
    }

    onNoAlert(){
    const alert = this.alertCtrl.create({
      message: 'Thank you for choosing our App', 
      buttons:[{
      text:'Close App',
      // role: 'cancel',
      handler:() =>{this.platform.exitApp()}
    
    },
    ]
    });
    alert.present();
    }


onExitApp(){
  this.viewCtrl.dismiss();
}

ngOninit() {
  if (this.device.model !== ''  && this.device.manufacturer !== '' ) {
    this.storageBtn = true;
    this.storage.get('Model').then((ModelName) => { console.log(ModelName, this.device.model) });
    this.storage.get('Manufacturer').then((Manufacturer)=>{console.log(Manufacturer, this.device.manufacturer)});
  } else {
    this.storageBtn = false;
    // this.storage.set('deviceModel',this.deviceModel);
    // this.storage.set('deviceManufact',this.deviceManufact);
    // this.storage.get('device').then((val)=>{
    //   console.log('Your deviceModel is ', val)
    // })
  }
  
}

}
