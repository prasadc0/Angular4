import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';


@Component({ 
  templateUrl: './singlePopUp.html',
  styleUrls: ['./singlePopUp.css'],

})
export class HeroJobAdComponent   {
  @Input() data: any;

}