import { RequisicoesService } from './../requisicoes.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumorService {
  constructor(private requisicao: RequisicoesService) {
  }

  public create_humor(humor): Observable<any> {
    return this.requisicao.post('humor/', humor);
  }

  public get_humor(): Observable<any> {
    return this.requisicao.get('humors/');
  }

  public get_status(): Observable<any> {
    return this.requisicao.get('humor_status/')
  }
}
