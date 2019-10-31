import { AutenticacaoService } from './autenticacao.service';
import { 
  Component, 
  ChangeDetectorRef, 
  EventEmitter, 
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
  
  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private autenticacao: AutenticacaoService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  setTitle(nome: string) {
    this.title = nome;
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}