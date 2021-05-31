import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderPage } from '../header/header.page';
import { CardPage } from '../card/card.page';
import { SearchBarPage } from '../search-bar/search-bar.page';
import { TabsPage } from '../tabs/tabs.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderPage, CardPage, SearchBarPage, TabsPage]
})
export class HomePageModule {}
