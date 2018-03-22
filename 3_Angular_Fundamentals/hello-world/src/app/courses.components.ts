// Use Component module from angular core library
import { Component } from '@angular/core';

// Decorator function syntax to set some properties.
// - 'selector' references CSS elements. Ex:
//    <courses> => "courses"
//    <div class="courses"> => ".courses"
//    <div id="courses"> => "#courses"
@Component({
    selector: 'courses',
    template: '<h2>Courses</h2>' 
})
export class CoursesComponent {

}