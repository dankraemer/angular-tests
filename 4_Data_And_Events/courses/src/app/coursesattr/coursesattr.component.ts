import { Component, OnInit } from '@angular/core';

// HTML vs DOM (Document Object Model)
// - DOM is a model of objects that represents the structure of a document. 
//   It is a tree of objects in memory
// - HTML is a markup language to represent DOM in text.
// 
// Most of the attributes of HTML elements have one-to-one mapping to properties of a DOM object.
// There exist some exceptions, such as the 'colspan' attribute in <td> element
// Ex.  <td [colspan]="colSpan"></td> 
//
// When using property binding, remember that you are binding to a DOM property
// and not to an attribute of a html element.
//
// To address the 'colspan' attribute of the <td> html element, you need to add "attr."
// Ex. <td [attr.colspan]="colSpan"></td>

@Component({
  selector: 'app-coursesattr',
  templateUrl: './coursesattr.component.html',
  styleUrls: ['./coursesattr.component.css']
})
export class CoursesattrComponent implements OnInit {
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;

  constructor() { }

  ngOnInit() {
  }

}
