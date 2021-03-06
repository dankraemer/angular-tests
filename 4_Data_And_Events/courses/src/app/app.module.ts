import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesattrComponent } from './coursesattr/coursesattr.component';
import { CourseseventsComponent } from './coursesevents/coursesevents.component';
import { CoursepipesComponent } from './coursepipes/coursepipes.component';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesattrComponent,
    CourseseventsComponent,
    CoursepipesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
