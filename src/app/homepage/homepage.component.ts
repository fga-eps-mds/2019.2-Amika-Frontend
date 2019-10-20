import { AutenticacaoService } from './../autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private autenticacao:AutenticacaoService) { 
    this.autenticacao.setHeader();
  }

  ngOnInit() {
  }

  navigateAgenda() {
    this.router.navigate(['agenda']);
  }

}
