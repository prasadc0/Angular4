import { Directive, ViewContainerRef , TemplateRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef , private tempref2:TemplateRef<any>) { }
   
}