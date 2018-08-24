import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {CommonserviceService} from '../services/commonservice.service';
import { FormBuilder, Validators } from '@angular/forms';

//same can be done using form group, cause foem builder takes instances of form group//

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'search-panel',
  templateUrl: './searchpanel.component.html',
  styleUrls: ['./searchpanel.component.css']
})

export class SearchpanelComponent implements OnInit {
//variable declaration for common service
public data:string;
public IsOpen:Boolean = true;
public switch_expression = "match_expression_3";
public titleColor = 'yellow'
public green ='green'
public blue ='blue'
 
param = {value: 'world'};
//constructor//
  constructor(private cmnservice: CommonserviceService,public fb: FormBuilder){

   this.cmnservice.dataChange.subscribe((data) => {

      this.data = data;
      
      if( this.data =='Open'){
      	this.IsOpen = true;
      }else if(this.data =='close'){
      	this.IsOpen = false;
      }
    });
}

//ngInit//
  ngOnInit() {
  }

 public mail = "/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i";
// start of code for form group //
 public loginForm = this.fb.group({
    email: ["123@hh.hdh", Validators.required],
    password: ["1254", Validators.required]
  });
   
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm );
    console.log(this.loginFormGroup );
  }
// End of code for form group //

//start of form group directly (without form builder)//
//here we assign formcontrol name in view and also in .ts  file 
public loginFormGroup = new FormGroup({
  email: new FormControl("email", Validators.required),
  password: new FormControl("password", Validators.required)
});


 /* powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero('naga','prasad',23);
 
   onSubmit(val ) {  
   
   console.log(  'tempVar');

    }*/

   /*get diagnostic() { return JSON.stringify(this.model); }*/


}
