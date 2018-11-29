import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  category: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.category = [{title: 'Restaurant', checked: 'false'},
    {title: 'Bar', checked: 'true'}, {title: 'Hospital', checked: 'false'},
    {title: 'Store', checked: 'false'}, {title: 'Beauty Salon', checked: 'false'},
    {title: 'Bus Station', checked: 'true'}, {title: 'Airport', checked: 'false'},
    {title: 'Cafe', checked: 'false'}, {title: 'Car Rent', hecked: 'false'},
    {title: 'Clothes Store', checked: 'false'}, {title: 'Dental', checked: 'false'}];
   }

   dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
  }

}
