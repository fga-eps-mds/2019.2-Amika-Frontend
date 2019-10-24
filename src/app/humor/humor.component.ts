import { Component, OnInit, NgModule } from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';
import { Humor } from './humor.model';
import { HumorService } from './humor.service';


@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css']
})

export class HumorComponent implements OnInit {

  max = 5;
  rate = 0;
  humor: Humor;

  overStar: number | undefined;
  percent: number;

  constructor(private humorService: HumorService) { }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  save(){
    console.log("man");
    this.humor= ({
      aluno: 1,
      valor: this.rate,
    });
    this.humorService.create_humor(this.humor).subscribe();
    console.log(this.humor);
  }


  ngOnInit() {
  }

}

