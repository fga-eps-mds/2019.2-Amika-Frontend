import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class ListaService {

    errors;

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    }

    constructor(private http: HttpClient, private router:Router) { }

    enviar(dados) { 
        return this.http.post("http://localhost:8000/multiplos_registros/", dados, this.httpOptions)
                .subscribe(data => {
                    console.log(data);
                    
                }, 
                error => {
                    console.log(error);
                    this.errors = error;
                });
    }
}

