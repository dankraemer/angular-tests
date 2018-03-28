// Use Component module from angular core library
import { Component } from '@angular/core';

// Decorator function syntax to set some properties.
// - 'selector' references CSS elements. Ex:
//    <courses> => "courses"
//    <div class="courses"> => ".courses"
//    <div id="courses"> => "#courses"
// - 'template':
// {{}} used to render information dynamically
// This is called String Interpolation
//   template: '<h2>{{  getTitle() }}</h2>'

@Component({
    selector: 'courses',
    // 1. The ` (backtick) will help to break the template into
    //    multiple lines and make it more readable
    // 2. Directives are special operation in Angular that
    //    modifies the structure of the DOM
    template: `
        <h2>{{  getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of courses';
    courses;

    getTitle() {
        return this.title;
    } 
}