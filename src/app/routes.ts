import {Routes} from '@angular/router';
import {CardComponent} from './component/card.component';
import { HomeComponent } from './component/home.component';
import { SignInComponent } from './component/signIn.component';
import { CardsComponent } from './component/cards.component';
import { SignUpComponent } from './component/signout.components';



export const appRoutes:Routes=[
   
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   
    {
        path:'signIn',
        component: SignInComponent
        },
    {
    path:'home',
    component: HomeComponent
    },

    
     {
        path:'card',
        component:CardComponent
    } ,
    {
        path:'cards',
        component:CardsComponent
    } ,
    
    {
        path:'signUp',
        component:SignUpComponent
    } ,

   
    
];