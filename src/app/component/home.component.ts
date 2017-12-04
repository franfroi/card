import { Component,} from '@angular/core';
import { User } from '../class/User';


@Component({
  selector: 'app-home',
 
  templateUrl: '../view/home.component.html',
 
  styleUrls: ['../style/card.component.css']
})
export class HomeComponent {
  public user :User= User.connectedUser;
   
}