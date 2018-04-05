import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesattrComponent } from './coursesattr/coursesattr.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesattrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
