import { AutenticacaoService } from './autenticacao.service';
import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  OnInit,
  Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amika';
  mobileQuery: MediaQueryList;
  isAdmin: boolean;
  logado: boolean;
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public autenticacao: AutenticacaoService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isSuperuser();
  }

  setTitle(nome: string) {
    this.title = nome;
  }

  isSuperuser() {
    const params = this.autenticacao.getJWTParams();
    if (!params) {
      this.logado = false;
    }
    else if (params['superusuario']) {
      this.isAdmin = true;
      this.logado = true;
    }
    else {
      this.isAdmin = false;
      this.logado = true;
    }
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}
