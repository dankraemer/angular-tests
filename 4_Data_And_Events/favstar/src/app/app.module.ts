import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavstarComponent } from './favstar/favstar.component';
import { TitlecasingComponent } from './titlecasing/titlecasing.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FavstarComponent,
    TitlecasingComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
