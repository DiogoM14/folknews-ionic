import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDetailsPageRoutingModule } from './new-details-routing.module';

import { NewDetailsPage } from './new-details.page';
import { HeaderPage } from '../header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDetailsPageRoutingModule
  ],
  declarations: [NewDetailsPage, HeaderPage]
})
export class NewDetailsPageModule {}
