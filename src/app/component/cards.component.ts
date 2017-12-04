import { Component } from "@angular/core";
import { Card } from "../class/Card";
import { User } from "../class/User";

@Component({
    selector: 'app-cards',
    templateUrl: '../view/cards.component.html',
    styleUrls: ['../style/card.component.css']
  })
  export class CardsComponent {
    public user :User= User.connectedUser;
    public Cards:Card[]=Card.tabcard;
  }