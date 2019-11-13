import { AutenticacaoService } from './autenticacao.service';
import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { PerfilService } from './perfil.service';
import { environment } from '../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Amika';
  mobileQuery: MediaQueryList;
  isAdmin: boolean;
  logado: boolean;
  @Output() toggleSideNav = new EventEmitter();

  username: string;
  firstName: string;
  grupo: string;
  foto: string;

  private readonly _mobileQueryListener: () => void;
  private subscriptions: Subscription = new Subscription();
  private userId: string = localStorage.getItem('user_id');

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public autenticacao: AutenticacaoService,
    private perfilService: PerfilService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.isSuperuser();
    this.getPerfil();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  setTitle(nome: string) {
    this.title = nome;
  }

  isSuperuser() {
    const params = this.autenticacao.getJWTParams();
    if (!params) {
      this.logado = false;
    } else if (params.superusuario) {
      this.isAdmin = true;
      this.logado = true;
    } else {
      this.isAdmin = false;
      this.logado = true;
    }
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }

  getPerfil() {
    this.subscriptions.add(this.perfilService.perfilAluno(this.userId)
      .subscribe((data: any) => {
        this.username = data.username;
        this.firstName = data.first_name;
        this.grupo = data.grupo;
        if (data.foto) {
          this.foto = `${environment.urlApi}${data.foto.slice(1)}`;
        } else {
          this.foto = 'https://cf.ltkcdn.net/socialnetworking/images/orig/168646-425x425-Cat-Avatar-Primary.jpg';
        }
      }));
  }

  adicionaFoto() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('input', (e: Event) => {
      this.trocaFoto((e.target as HTMLInputElement).files[0]);
    });
  }

  trocaFoto(foto) {
    const formData = new FormData();
    formData.append('foto', foto);

    this.subscriptions.add(this.perfilService.trocaFoto(this.userId, formData)
      .subscribe(() => {
        this.getPerfil();
      }));
  }
}
