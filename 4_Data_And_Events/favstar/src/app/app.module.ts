import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavstarComponent } from './favstar/favstar.component';
import { TitlecasingComponent } from './titlecasing/titlecasing.component';


@NgModule({
  declarations: [
    AppComponent,
    FavstarComponent,
    TitlecasingComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
