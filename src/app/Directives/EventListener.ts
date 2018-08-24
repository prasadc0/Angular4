import {Directive ,HostListener} from '@angular/core';


@Directive({ selector: '[eventReceiver]' })

export class Eld{

constructor(  ){} 
  
 
  @HostListener('document:click',['$event']) clickout(event) {
    console.log('event',event);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouse left ');
     
  }
}


   
 
   