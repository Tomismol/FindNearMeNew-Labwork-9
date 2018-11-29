import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharepopupPage } from './sharepopup.page';

const routes: Routes = [
  {
    path: '',
    component: SharepopupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharepopupPage],

  exports: [
    SharepopupPage
  ]
})
export class SharepopupPageModule {}
