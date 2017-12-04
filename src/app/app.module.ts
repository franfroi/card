
import {HttpModule} from '@angular/http';
import {HomeComponent} from './component/home.component';
import {AppComponent} from './component/app.component';
import { SignInComponent } from './component/signIn.component';
import {CardComponent} from './component/card.component';
import {ColorComponent} from './component/color.component';
import { NavComponent } from './component/nav.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BackgroundDirectives } from './directive/background.directives';

import { NavComponent2 } from './component/nav2.component';

import { FontDirectives } from './directive/font.directives';
import { CardsComponent } from './component/cards.component';
import { SignUpComponent } from './component/signout.components';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavComponent2,
    HomeComponent,
    SignInComponent,
    CardComponent,
    CardsComponent,
    ColorComponent,
    BackgroundDirectives,
    FontDirectives,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,  //ajax *1,
     HttpClientModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
