import {User} from '../class/User';
import { Component} from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singIn',
 
  templateUrl: '../view/signIn.component.html',
 
  styleUrls: ['../style/card.component.css'],
  //providers:[UserService]//ajax *1
})
export class SignInComponent {
//public user:User[]=[];
   
public errorName:string;
public errorPassword:string;
public errorUser:string;
public errorNameFlag:boolean=false;
public errorPasswordFlag:boolean=false;

// constructor(private userService: UserService){//ajax *1
// }
 // Inject HttpClient into your component or service.
 constructor(private http: HttpClient,private router:Router) {}
valideUser(name,password){
 
if (name.length<5){
    document.getElementById("name").style.border = "1px solid red";
    this.errorName="Minimun 5 caracteres";
}
else{
  document.getElementById("name").style.border = "1px solid green";
  this.errorName="";
  this.errorNameFlag=true;
}

if (password.length<8){
  document.getElementById("password").style.border = "1px solid red";
  this.errorPassword="Minimun 8 caracteres";
}
else{
document.getElementById("password").style.border = "1px solid green";
this.errorPassword="";
this.errorPasswordFlag=true;
}

      if (this.errorNameFlag==true && this.errorPasswordFlag==true){

        //appelle une fonction connect
        
      
       // console.log(name)
        const body = {name: name, password:password};
         this.http.post('http://localhost/Angular/AngularApi/CardApi',body) 
          .subscribe(
            data => {

           
              if(data['success']==true){
              this.errorUser="fffffffffff";
              const dataUser=data['user'];
              const user :User=new User(dataUser['name'],dataUser['upassword']);
              user.setId(dataUser['id']);
              User.connectedUser=user;
              console.log(user);
              this.router.navigateByUrl('card');}

             else if(data['success']==false){ this.errorUser="Compte non existant"};
            },
            err => {
              console.log(err);
            }
          );


      
      
      }
}




}