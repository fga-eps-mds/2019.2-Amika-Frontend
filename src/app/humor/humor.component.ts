import { Component, OnInit, NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css']
})

export class HumorComponent implements OnInit {

  max = 5;
  rate = 0;

  overStar: number | undefined;
  percent: number;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  save(){

  }

  constructor() { }

  ngOnInit() {
  }

}

