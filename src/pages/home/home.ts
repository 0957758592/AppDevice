import { NavController, ViewController, ModalController } from 'ionic-angular';
import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ionViewWillEnter() {

    setTimeout(() => {
  let gotoModal = this.modalCtrl.create(ModalPage);
   gotoModal.present();}, 3000)

 }


//  onDidDismiss(sempleModal){
//   sempleModal.dismiss();
//  }

//  ionViewWillLeave(sempleModal){
//   // let sempleModal = this.modalCtrl.create(ModalPage);
//   sempleModal.dismiss();
//  }
  
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController){  }

  onModal(){
    this.navCtrl.push(ModalPage);
  }


 

  }


