import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Humor } from './humor.model';
import { HumorService } from './humor.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css']
})

export class HumorComponent implements OnInit {

  max = 5;
  rate = 0;
  humor: Humor;
  erroModalRef: BsModalRef;
  @ViewChild('erroModal', {static: false}) erroModal;

  overStar: number | undefined;
  percent: number;

  constructor(private humorService: HumorService, private modalService: BsModalService, private router: Router) { }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  save(){
    console.log("man");
    this.humor= ({
      aluno: 1,
      humor_do_dia: this.rate,
    });
    this.humorService.create_humor(this.humor).subscribe();
    console.log(this.humor);
    this.erroModalRef = this.modalService.show(this.erroModal, {class: 'modal-sm'});
  }


  homePage() {
    this.router.navigate(['']);
    console.log('adssddsasdd')
  }

  voltar(){
    this.erroModalRef.hide();
    this.mensagem= "Humor Adicionado com sucesso";
  }

  ngOnInit() {
  }

}

