import { AutenticacaoService } from './../autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private autenticacao:AutenticacaoService) { 
    this.autenticacao.setHeader();
  }

  ngOnInit() {
  }

}
