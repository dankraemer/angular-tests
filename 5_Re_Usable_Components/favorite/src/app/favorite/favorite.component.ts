import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // The @Input decorator is used to define Input Properties.
  // An alias can be used to keep the contrart to a component stable.
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  onStarClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
    console.log("Star clicked!", this.isFavorite);
  }

}
