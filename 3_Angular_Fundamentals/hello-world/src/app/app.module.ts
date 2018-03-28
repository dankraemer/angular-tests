import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // CoursesService should be registered as a service provider in the module.
    // Declare a dependency into the module.
    // Singleton Pattern: Angular will create a single instance for the module
    //                      and will pass the reference to all components
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
