import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursesevents',
  templateUrl: './coursesevents.component.html',
  styleUrls: ['./coursesevents.component.css']
})
export class CourseseventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // To have access to the event object, add an $event as an argument.
  // It represents a standard DOM event, same as in vanilla JS and JQuery.
  onSave($event) {
    // Prevent Event Bubbling.
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  // Test Event Bubbling, an events bubbles up the DOM tree.
  onDivClicked() {
    console.log("Div was clicked");

  }
}
