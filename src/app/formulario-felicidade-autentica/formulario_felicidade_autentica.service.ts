import { AutenticacaoService } from './../autenticacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormularioFelidadeAutenticaService {
  
    constructor(private http: HttpClient, private autenticacao: AutenticacaoService) { 
        this.autenticacao.setHeader();
     }

    enviar(dados): Observable<any> { 
        console.log("this.autenticacao.httpOptions");
        console.log(this.autenticacao.httpOptions);
        console.log(dados);
        console.log(this.autenticacao.httpOptions.headers);
        console.log("this.autenticacao.httpOptions");
        return this.http.put(environment.urlApi + "aluno/2/", dados, this.autenticacao.httpOptions);
    }
}