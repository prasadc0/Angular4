import { Component } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {TranslateService} from 'ng2-translate';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { customPopUp } from './CustomPopUp';
import { DragDropDirectiveModule} from "angular4-drag-drop"; 
import { AdService }         from './ad.component/ad.service';

import {AdItem} from './ad.component/ad-item';
import {HeroJobAdComponent}  from './ad.component/hero-job-ad.component';
 
  
 
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AdService] 
}) 

export class AppComponent   { 
  ads: AdItem[];
constructor(translate: TranslateService,private dialogService: DialogService, private adService:AdService ) { 
  	translate.setDefaultLang('en');
    translate.use('en');
    }

/*dragstart_handler(event){
    console.log(event);
   // Add the target element's id to the data transfer object
   event.dataTransfer.setData("text/plain", event.target.id);
   event.dropEffect = "move";
    }

   drop_handler(event){
      console.log(event);
       event.preventDefault();
  
 event.dataTransfer.dropEffect = "move"

 var data = event.dataTransfer.getData("srcElement");
 event.target.appendChild(document.getElementById(data));

 event.target.appendChild(document.getElementById('p1'));
    } */
   /* releaseDrop(event){
      console.log('event is ',event);
    }*/

    OpenSinglemodel(){

         this.ads.push(new AdItem(HeroJobAdComponent,   {headline: 'Warning',
                                        body: 'Are you sure want tpo cancel transaction??'}))
    }

    showConfirm() {
            let disposable = this.dialogService.addDialog(customPopUp, {title:'TWO BUTTON',message:'Click on the button to confirm'})
                .subscribe((isConfirmed)=>{ 
                    if(isConfirmed) {
                       console.log(isConfirmed , 'is the value');
                    }
                    else {
                       console.log(isConfirmed , 'is the value');
                    }
                }); 
            setTimeout(()=>{
                disposable.unsubscribe();
            },100000000);
        }; 
    public OPenbreadcrumb = false;
    title = 'Shipping and Receiving';
    ModuleName = 'Shipping and Receiving';
}

 