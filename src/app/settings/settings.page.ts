import { Component, OnInit } from '@angular/core';
import { App, NavController } from '@Ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor( public navCtrl: NavController, public app: App) { }

  openprofile() {
    this.navCtrl.parent.select(3);
  }
  logout() {
   this.app.getRootNav().setRoot('LoginPage');
  }
  ngOnInit() {
  }

}
