import { Component, OnInit } from '@angular/core';
import {CommonserviceService} from '../services/commonservice.service';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'] ,
  providers:[CommonserviceService] 
})

export class TestComponentComponent implements OnInit {

 constructor(private cmnservice: CommonserviceService, translate: TranslateService) {}

 public dataToDisplay = "";
 public isOutboundList = false;
 
 ngOnInit()  {

 	this.cmnservice.getUser('http://localhost:7001/RSSShipping/shipping/outbound/281').subscribe(

 		res=> {
	  		this.dataToDisplay = res.rtvSuspendList;
	  		if( res.rtvSuspendList.length < 7 ){
	  		this.isOutboundList = true;

	  		}else{

	  		this.isOutboundList = false;
	  		
	  		}
 		})
 }

 setData(value) {
    this.cmnservice.setData(value);
  }

 

}


