import {Http} from '@angular/http';
import { User } from "../class/User";
import { Injectable } from '@angular/core';
@Injectable()// ce service pourra injecter dans un constructor


export class UserService{


        private url:string='http://localhost/Angular/AngularApi/CardApi.php';

        constructor(private http:Http){
            
        }

     getUser(user:User):Promise<any>{
         return  this.http.get(this.url)
         .toPromise();
   

    }
}
