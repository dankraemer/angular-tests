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

// Class Binding is a variation of Property Binding.
// <button class="btn btn-primary" [class.active]="isActive">Save</button>
// If the condition evaluates to true, the class will be added to the element.

// Style Binding is also a variation of Property Binding.
// <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Load</button>
// The ternary operand will evaluate and select the property value.

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";
  isActive=true;

  constructor() { }

  ngOnInit() {
  }

}
