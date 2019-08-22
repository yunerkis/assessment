import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusComponent } from './status.component';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [StatusComponent]
})
export class StatusModule { }
