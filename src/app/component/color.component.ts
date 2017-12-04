import { Component, Output, EventEmitter} from '@angular/core';
import { Color } from '../class/Color';

@Component({
  selector: 'app-color',
  templateUrl: '../view/color.component.html',
  styleUrls: ['../style/card.component.css']
})
export class ColorComponent {
   public color: Color=new Color;
  
   @Output()
   //recupere l'evenement (ngModelChange)
   public event: EventEmitter<Color>=new EventEmitter();

   setColorParent(){
    this.event.emit(this.color);
   }
}