import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormularioFelidadeAutenticaService {

    errors;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };
  
    constructor(private http: HttpClient, private router: Router) { }
}