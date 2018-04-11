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

  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.:w
  `

  constructor() { }

  ngOnInit() {
  }

}
