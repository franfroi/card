import {User} from '../class/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav2',
 
  templateUrl: '../view/nav2.component.html',
 
  styleUrls: ['../style/card.component.css']
})
export class NavComponent2 {
    public user :User= User.connectedUser;
 
}