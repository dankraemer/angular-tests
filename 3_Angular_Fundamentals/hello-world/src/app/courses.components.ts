// Use Component module from angular core library
import { Component } from '@angular/core';

// Decorator function syntax to set some properties.
// - 'selector' references CSS elements. Ex:
//    <courses> => "courses"
//    <div class="courses"> => ".courses"
//    <div id="courses"> => "#courses"
@Component({
    selector: 'courses',
    // {{}} used to render information dynamically
    // This is called String Interpolation
    template: '<h2>{{  getTitle() }}</h2>' 
})
export class CoursesComponent {
    title = 'List of courses';

    getTitle() {
        return this.title;
    } 
}