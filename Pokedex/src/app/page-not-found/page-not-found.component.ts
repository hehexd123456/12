import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  _id: number;
  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    // todo
    const arr = [31, 45, 46, 1, 27, 16, 30, 20, 10, 39];
    this._id = arr[Math.floor(Math.random() * arr.length)];
  }

  onBack() {
    this.location.back();
  }
}
