import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-list',
  templateUrl: './sec-list.page.html',
  styleUrls: ['./sec-list.page.scss'],
})
export class SecListPage implements OnInit {
  tabBarElement: any;
  secList: Array<any>;

  constructor() {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.secList = [{img: 'assets/images/001.png', title: 'Restaurant', rate: '5.0'},
    {img: 'assets/images/002.png', title: 'Restaurant2', rate: '4.8'},
    {img: 'assets/images/003.png', title: 'Restaurant3', rate: '4.3'},
    {img: 'assets/images/001.png', title: 'Restaurant4', rate: '4.0'}];
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  likeItem(item) {
    item.like = !item.like;
  }

  sharePopover(myEvent) {
  const popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }
  ngOnInit() {
  }

}
