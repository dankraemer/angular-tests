import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursesevents',
  templateUrl: './coursesevents.component.html',
  styleUrls: ['./coursesevents.component.css']
})
export class CourseseventsComponent implements OnInit {
  email = "me@example.com"

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

  // For Two-way Data Binding, Angular has a special syntax.
  // [()] is called "banana in a box" 
  // <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  onKeyUp() {
    console.log(this.email);
  }

  // Old way of handling and filtering and event.
  // <input (keyup)="onKeyUp($event)" />
  //
  // onKeyUp($event) {
  //   if ($event.keyCode == 13) console.log("ENTER was pressed");
  // }

  // New way, filter the event at input element.
  // This way we don't need to pass the event object.
  // <input (keyup.enter)="onKeyUp()" />

  // To pass some information we can use template variables.
  // Ex. for name field content
  // <input #name (keyup.enter)="onKeyUp(name.value)" />
  //onKeyUp(name) {
  //  console.log("ENTER was pressed:", name);
  //}

}
