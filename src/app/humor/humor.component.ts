import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Humor } from './humor.model';
import { HumorService } from './humor.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { AlertaService } from '../alerta.service';


@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css'],
  providers: [DatePipe]
})

export class HumorComponent implements OnInit {

  max = 5;
  rate = 1;
  humor: Humor;
  hoje: string;
  humores: Array<Humor>;
  myDate = new Date();
  error: any={isError:false,errorMessage:''};
  adicionado = true;
  isReadonly = false;


  constructor(private humorService: HumorService,private datePipe: DatePipe, private router: Router, public alertaService:AlertaService) {}

  save(){
    console.log("man");
    this.humor= ({
      aluno: 1,
      humor_do_dia: this.rate,
      data: this.datePipe.transform(this.myDate, 'yyyy-MM-dd'),
    });
    this.humorService.create_humor(this.humor).subscribe((data:any) => {
      this.alertaService.alerta('O humor foi adicionado com sucesso!', 'success', true)
    });
  }

  getStatus() {
    this.humorService.get_status().subscribe((data:any) => {
      this.rate = data.humor;
      this.adicionado = data.adicionado;
    });
  }

  homePage() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.getStatus();
  }

}

