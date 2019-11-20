import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  constructor(private autenticacao: AutenticacaoService) {
  }

  public create_humor(humor): Observable<any> {
    return this.autenticacao.post('humor/', humor);
  }

  public get_humor(): Observable<any> {
    return this.autenticacao.get('humors/');
  }

  public get_status(): Observable<any> {
    return this.autenticacao.get('humor_status/')
  }
}
