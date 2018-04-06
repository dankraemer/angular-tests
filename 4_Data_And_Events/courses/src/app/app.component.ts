import { Component } from '@angular/core';

// $ npm install bootstrap --save
// Downloads Bootstrap and stores it into node_modules folder.
// --save flags adds Bootstrap as a dependency in package.json

// The folder node_modules should not be commited into a git repository.
// Later on package.json can be used to download all project dependencies.
// $ npm install

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
