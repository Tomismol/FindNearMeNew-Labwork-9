import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import 'intl-tel-input';
import $ from "jquery";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isDisabled = true;
  img = 'assets/images/default.png';

    constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera) {
    }

    changeData(input) {
      this.isDisabled = ! this.isDisabled;
    }

    ngOnInit(): any {
      const telInput = $('#elemtId');
      const output = $('#output');

      telInput.intlTelInput();
      // listen to "keyup", but also "change" to update when the user selects a country
      telInput.on('keyup change', function() {
        const intlNumber = telInput.intlTelInput('getNumber');
        if (intlNumber) {
          output.text('International: ' + intlNumber);
        } else {
          output.text('Please enter a number below');
        }
      });
    }


    getPhoto() {
        const buttons = [
          {
            text: 'Camera',
            handler: () => {
              this.get_camera(2);
            }
          }, {
            text: 'Gallery',
            handler: () => {
                this.get_camera(1);
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {}
          }

        ];
        if (this.img !== 'assets/images/default.png') {
          const butttondelete = {text: 'Delete', handler: () => {this.delete_image(); }};
          buttons.push(butttondelete);
        }
        this.actionSheetCtrl.create({buttons: buttons}).present();
    }

    delete_image() {
        this.img = 'assets/images/default.png';
    }

    get_camera = function (source) {
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          allowEdit: true,
          targetWidth: 80,
          targetHeight: 80,
          correctOrientation: true
      };

    if (source === 1) {options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY; } else { options.sourceType =
      this.camera.PictureSourceType.CAMERA; }

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
          this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        alert('camera.getPicture ... error');
    });
    };

}
