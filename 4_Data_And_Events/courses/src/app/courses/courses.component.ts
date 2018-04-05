import { Component, OnInit } from '@angular/core';

// With property binding, we bind the property of a DOM element (ex. src)
// with a field or property in our component (ex. imageUrl).
// 
// - String Interpolation (preferable for texts in headings, divs, paragraphs):
//   <h2>{{ title }}</h2>
//   <img src="{{ imageUrl }}" />
//
// - Property binding using brackets '[]' (preferable for images and links): 
//   <h2 [textContent]="title"> </h2>
//   <img [src]="imageUrl" />
//
// Property binding works only one way, from component to the DOM.

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";

  constructor() { }

  ngOnInit() {
  }

}
