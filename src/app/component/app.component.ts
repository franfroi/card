import { Component} from '@angular/core';
import { User } from '../class/User';


@Component({
  selector: 'app-root',
  template: `


  <!-- mes components vont s afficher ici-->

  <router-outlet>

  </router-outlet>
 
  `,
  styleUrls: ['../style/card.component.css'],
  
})
export class AppComponent  {
  public user :User= User.connectedUser;
  public notconnected:boolean=true;


 
}