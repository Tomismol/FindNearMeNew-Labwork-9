import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  forgotPassword() {
    const forgotpas = self.alertCtrl.create({
      title: 'Forgot password?',
      message: 'Enter your email address to reset your password',
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    forgotpas.present();
  }

  ngOnInit() {
  }

}
