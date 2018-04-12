import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favstar',
  templateUrl: './favstar.component.html',
  styleUrls: ['./favstar.component.css']
})
export class FavstarComponent implements OnInit {
  isFavorite = true;

  constructor() { }

  ngOnInit() {
  }

  onStarClick() {
    this.isFavorite = !this.isFavorite;
    console.log("Star clicked!", this.isFavorite);
  }
}
