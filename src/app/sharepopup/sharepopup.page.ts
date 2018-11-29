import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-sharepopup',
  templateUrl: `
  <ion-row class="shareIcon">
    <ion-col>
       <ion-icon name="logo-whatsapp"></ion-icon>
    </ion-col>
    <ion-col>
       <ion-icon name="logo-facebook"></ion-icon>
    </ion-col>
    <ion-col>
       <ion-icon name="logo-twitter"></ion-icon>
    </ion-col>
    <ion-col>
       <ion-icon name="logo-googleplus"></ion-icon>
    </ion-col>
  </ion-row>
`,
  styleUrls: ['./sharepopup.page.scss'],
})
export class SharepopupPage implements OnInit {

  constructor(public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharepopupPage');
  }

  close() {
  this.viewCtrl.dismiss();
  }

  ngOnInit() {
  }

}
