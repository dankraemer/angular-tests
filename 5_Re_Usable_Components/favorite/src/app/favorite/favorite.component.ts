import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // The @Input decorator is used to define Input Properties
  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  onStarClick() {
    this.isFavorite = !this.isFavorite;
    console.log("Star clicked!", this.isFavorite);
  }

}
