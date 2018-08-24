import {Component} from '@angular/core'
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title:string;
  message:string;
} 


@Component({
  selector: 'confirm',
  template : `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close " style="float:right; text-align:right" (click)="close()" >&times;</button>
                     <h4 class="modal-title"> </h4>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'Are you sure?'}}</p>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">Confirm</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>`,
              styleUrls: ['./custompopup.css']
})



export class customPopUp  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel{
	
	title: string;
  	message: string;

constructor( dialogService: DialogService) { 
	
	super(dialogService);

    }

        confirm() {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
          }

          
}