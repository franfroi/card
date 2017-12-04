import {User} from '../class/User';
import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from '../class/Card';
import { Color } from '../class/Color';
import { FontSize } from '../class/FontSize';
import { FontColor } from '../class/FontColor';
import { FontFamily } from '../class/FontFamily';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: '../view/card.component.html',
  styleUrls: ['../style/card.component.css']
})
export class CardComponent {
  title = 'app';
  public authorisationLastname=false;
  public authorisationFirstname=false;
  public authorisationFonction=false;
  public authorisationAdress=false;
  

  public card :Card=new Card();
  public user :User= User.connectedUser;

  public color: Color=new Color;
  public Cards:Card[]=Card.tabcard;
 
  constructor(private router:Router) {}
   @Output()
   //recupere l'evenement (ngModelChange)
   public event: EventEmitter<Color>=new EventEmitter();

   setColorParent(){
    this.event.emit(this.color);
   }
//fontsize
   public fontsize:FontSize = new FontSize;
   public fontsizefirstname:FontSize = new FontSize;
   public fontsizefonction:FontSize = new FontSize;
   public fontsizeadress:FontSize = new FontSize;
   @Output()
   //recupere l'evenement (ngModelChange)
   public eventfontsize: EventEmitter<FontSize>=new EventEmitter();

   setFontSizeParent(){
    this.eventfontsize.emit(this.fontsize);
    console.log(this.fontsize);
   }
   setFontSizeParentfirstname(){
    this.eventfontsize.emit(this.fontsizefirstname);
    console.log(this.fontsizefirstname);
   }
   setFontSizeParentfonction(){
    this.eventfontsize.emit(this.fontsizefonction);
    console.log(this.fontsizefonction);
   }
   setFontSizeParentadress(){
    this.eventfontsize.emit(this.fontsizeadress);
    console.log(this.fontsizeadress);
   }

   //fontcolor
   public fontcolor:FontColor = new FontColor;
   public fontcolorfirstname:FontColor = new FontColor;
   public fontcolorfonction:FontColor = new FontColor;
   public fontcoloradress:FontColor = new FontColor;
   @Output()
   //recupere l'evenement (ngModelChange)
   public eventfontcolor: EventEmitter<FontColor>=new EventEmitter();

   setFontColorParent(){
    this.eventfontcolor.emit(this.fontcolor);
    console.log(this.fontcolor);
   }
   setFontColorParentfirstname(){
    this.eventfontcolor.emit(this.fontcolorfirstname);
    console.log(this.fontcolorfirstname);
   }
   setFontColorParentfonction(){
    this.eventfontcolor.emit(this.fontcolorfonction);
    console.log(this.fontcolorfonction);
   }
   setFontColorParentadress(){
    this.eventfontcolor.emit(this.fontcoloradress);
    console.log(this.fontcoloradress);
   }


  //fontFamily
  public fontfamily:FontFamily = new FontFamily;
  public fontfamilyfirstname:FontFamily = new FontFamily;
  public fontfamilyfonction:FontFamily = new FontFamily;
  public fontfamilyadress:FontFamily = new FontFamily;
  @Output()
  //recupere l'evenement (ngModelChange)
  public eventfontfamily: EventEmitter<FontFamily>=new EventEmitter();

  setFontFamilyParent(){
   this.eventfontfamily.emit(this.fontfamily);
   console.log(this.fontfamily);
  }
  setFontFamilyParentfirstname(){
    this.eventfontfamily.emit(this.fontfamilyfirstname);
    console.log(this.fontfamilyfirstname);
   }
   setFontFamilyParentfonction(){
    this.eventfontfamily.emit(this.fontfamilyfonction);
  
   }
   setFontFamilyParentadress(){
    this.eventfontfamily.emit(this.fontfamilyadress);
  
   }


  lastname(){
    this.authorisationLastname=true;
    this.authorisationFirstname=false;
    this.authorisationFonction=false;
    this.authorisationAdress=false;
  }
  firstname(){
    this.authorisationFirstname=true;
    this.authorisationLastname=false;
    this.authorisationFonction=false;
    this.authorisationAdress=false;
    
   }
   fonction(){
    this.authorisationFonction=true;
    this.authorisationFirstname=false;
    this.authorisationLastname=false;
    this.authorisationAdress=false;
        
   }

   adress(){
    this.authorisationAdress=true;
    this.authorisationFonction=false;
    this.authorisationFirstname=false;
    this.authorisationLastname=false;
        
   }
   validateCard(){
    const cardcolor=this.color.toString();
    const fontsizefirstname= this.fontsizefirstname.toString();
    const fontfamilyfirstname= this.fontfamilyfirstname.toString();
    const fontcolorfirstname= this.fontcolorfirstname.toString();

    const fontsizelastname= this.fontsize.toString();
    const fontfamilylastname= this.fontfamily.toString();
    const fontcolorlastname= this.fontcolor.toString();

    const fontsizefonction= this.fontsizefonction.toString();
    const fontfamilyfonction= this.fontfamilyfonction.toString();
    const fontcolorfonction= this.fontcolorfonction.toString();

    const fontsizeadress= this.fontsizeadress.toString();
    const fontfamilyadress= this.fontfamilyadress.toString();
    const fontcoloradress= this.fontcoloradress.toString();


//console.log(fontsizefirstname,fontfamilyfirstname,fontcolorfirstname)
    this.card["fontsizefirstname"]=fontsizefirstname;
    this.card["fontfamilyfirstname"]=fontfamilyfirstname;
    this.card["fontcolorfirstname"]=fontcolorfirstname;

    this.card["fontsizelastname"]=fontsizelastname;
    this.card["fontfamilylastname"]=fontfamilylastname;
    this.card["fontcolorlastname"]=fontcolorlastname;
    
    this.card["fontsizefonction"]=fontsizefonction;
    this.card["fontfamilyfonction"]=fontfamilyfonction;
    this.card["fontcolorfonction"]=fontcolorfonction;

    this.card["fontsizeadress"]=fontsizeadress;
    this.card["fontfamilyadress"]=fontfamilyadress;
    this.card["fontcoloradress"]=fontcoloradress;

    this.card["cardcolor"]=cardcolor;

    this.Cards.push(this.card);
    console.log(this.Cards);
    this.router.navigateByUrl('cards');
   }
 
}
