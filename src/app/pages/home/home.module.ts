import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component'

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlexLayoutModule,
    
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
