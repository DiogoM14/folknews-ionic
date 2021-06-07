import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentariesPageRoutingModule } from './commentaries-routing.module';

import { CommentariesPage } from './commentaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentariesPageRoutingModule
  ],
  declarations: [CommentariesPage]
})
export class CommentariesPageModule {}
