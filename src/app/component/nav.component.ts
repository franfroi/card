import {User} from '../class/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
 
  templateUrl: '../view/nav.component.html',
 
  styleUrls: ['../style/card.component.css']
})
export class NavComponent {
    public user :User= User.connectedUser;
 
}