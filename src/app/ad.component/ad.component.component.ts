import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';

import { AdItem }            from './ad-item';

@Component({
  selector: 'app-ad-component',
  templateUrl: './ad.component.component.html', 
  providers:[AdService]   
})
export class AdComponentComponent implements OnInit {

  ads: AdItem[];

   constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
