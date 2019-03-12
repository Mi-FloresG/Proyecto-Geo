import { SettingPage } from './../setting/setting';
import { MapPage } from './../map/map';
import { OfferPage } from './../offer/offer';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = OfferPage;
  tab4Root = MapPage;
  tab5Root= SettingPage;


  constructor() {

  }
}
