import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Humor } from './humor.model';
import { HumorService } from './humor.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css'],
  providers: [DatePipe]
})

export class HumorComponent implements OnInit {

  max = 5;
  rate = 0;
  humor: Humor;
  hoje: string;
  humores: Array<Humor>;
  erroModalRef: BsModalRef;
  myDate = new Date();
  error: any={isError:false,errorMessage:''};
  adicionado = false;
  isReadonly = false;

  @ViewChild('erroModal', {static: false}) erroModal;

  constructor(private humorService: HumorService,private datePipe: DatePipe, private modalService: BsModalService, private router: Router) {
    this.getter();
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
    window.location.reload();
  }

  getter() {
    this.humorService.get_humor().subscribe((data: any) => {
      this.humores = data;
      console.log('getting');
      this.verificaHumor();
    }, (error: any) => {
      this.error = error;
    });
  }

  homePage() {
    this.router.navigate(['']);
  }

  voltar(){
    this.erroModalRef.hide();
  }

  verificaHumor(){
    this.hoje = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.humores.forEach(item => {
      if (this.hoje == item.data) {
        console.log('JA TEVE HOJE');
        this.adicionado = true;
        this.rate = item.humor_do_dia;
        this.isReadonly = true;
      }
    });
    console.log(this.rate);
  }

  ngOnInit() {
  }

}

