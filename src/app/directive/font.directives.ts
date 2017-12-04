
//import {Directive,ElementRef ,Input, OnInit} from '@angular/core';
import {Directive,ElementRef ,Input, OnChanges} from '@angular/core';
@Directive({
    selector: '[appfont]'
})
//export class HightlightDirectives implements OnInit{
    export class FontDirectives implements OnChanges{
  

    public  element :HTMLElement;
    @Input()    Fontcolor:string;
    @Input()    Fontsize:string;
    @Input()    Fontfamily:string;
    
  


    constructor(el: ElementRef){
    this.element=el.nativeElement;
    
    }

    ngOnChanges(): void {
        this.element.style.fontSize=this.Fontsize;
        this.element.style.color=this.Fontcolor;
        this.element.style.fontFamily=this.Fontfamily;
    }

  
}