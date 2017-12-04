
//import {Directive,ElementRef ,Input, OnInit} from '@angular/core';
import {Directive,ElementRef ,Input, OnChanges} from '@angular/core';
@Directive({
    selector: '[appBackground]'
})
//export class HightlightDirectives implements OnInit{
    export class BackgroundDirectives implements OnChanges{
  

    public  element :HTMLElement;
    @Input('appBackground')    Bgcolor:string;
    
  


    constructor(el: ElementRef){
    this.element=el.nativeElement;
    
    }

    ngOnChanges(): void {

        this.element.style.backgroundColor=this.Bgcolor;
        
    }

  
}