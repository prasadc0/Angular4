import { Directive, ElementRef, AfterViewInit, Input , HostListener , TemplateRef , ViewContainerRef, Renderer} from '@angular/core';

@Directive({ selector: '[looper]' })

export class loopconstructer    {
  
  constructor(private elref2:ElementRef , private tempref2:TemplateRef<any> , private viewCont2: ViewContainerRef , private renderer : Renderer) {
    // code...
  }

  @Input('looper') set  loop(name: number){
    for(let i =0 ; i< name;i++){
     this.viewCont2.createEmbeddedView(this.tempref2) ;
     
    }


  }

  
}