import { Directive, ElementRef, AfterViewInit, Input , HostListener , TemplateRef , ViewContainerRef} from '@angular/core';
/*
@Directive({ selector: '[popupgenerate]' })*/

/*export class popupgenerator implements AfterViewInit  {

    @Input() popupgenerate: string;//input name as same as directive name 
    @Input('popupgenerate') myColor: string;//input name as alias name of  directive

    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit(): void {
       this.elRef.nativeElement.style.color = this.myColor;
       this.elRef.nativeElement.style.color = this.popupgenerate;
       this.elRef.nativeElement.style.color = this.myColor;
        

       console.log(this.elRef);
    }
 


}
*/

/*export class newHostlisterner  {

constructor(private elref:ElementRef , private tempref:TemplateRef<any> , private viewCont: ViewContainerRef){

}
 @HostListener('mouseover') onMouseOver() {
     this.changeColor('red');
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.changeColor('black');
   }
   private changeColor(color: string) {
     this.elref.nativeElement.style.color = color;
   }  


   @Input() set popupgenerate(condition: boolean) {
     if (condition) {
      this.viewCont.createEmbeddedView(this.tempref);
      console.log(this.tempref);
     } else {
      this.viewCont.clear();
      console.log(this.tempref);
     } 
  }


}*/



@Directive({ selector: '[popupgenerate]' })

export class newHostlisterner    {
  
  constructor(private elref2:ElementRef , private tempref2:TemplateRef<any> , private viewCont2: ViewContainerRef) {
    // code...
  }

  @Input('popupgenerate') set  looper(name: number){
    for(let i =0 ; i< name;i++){
     this.viewCont2.createEmbeddedView(this.tempref2) ;
    }


  }

  
}

