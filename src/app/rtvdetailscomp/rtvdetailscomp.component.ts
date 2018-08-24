import { Component, OnInit } from '@angular/core';
import {CommonserviceService} from '../services/commonservice.service';
import {Router}   from '@angular/router';


@Component({
  selector: 'app-rtvdetails',
  templateUrl: './rtvdetailscomp.component.html',
  styleUrls: ['./rtvdetailscomp.component.css'],
  providers:[CommonserviceService] 
})
export class RtvdetailscompComponent implements OnInit {

  constructor(private cmnservice : CommonserviceService , private router:Router) { }

  public details ='';

  public url = 'http://localhost:7001/RSSShipping/shipping/outbound/281';
  
  onClickMe(event) {
  console.log("event ",  event);
    	  this.router.navigate(['/app-transfer-navigate/'+event.target.innerText]);
    }
    


   

  ngOnInit() {

  this.cmnservice.getUser(this.url).subscribe(res =>{

  	 
  	this.details =  res.transferList;
  })
  }

}


 