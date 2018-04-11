import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursepipes',
  templateUrl: './coursepipes.component.html',
  styleUrls: ['./coursepipes.component.css']
})
export class CoursepipesComponent implements OnInit {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
