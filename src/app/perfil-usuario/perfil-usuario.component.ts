import { Component, OnInit } from '@angular/core';
import { PerfilUsuarioService } from './perfil-usuario.service';
import { PerfilUsuario } from './perfil-usuario.model';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  error: any;
  usuario:PerfilUsuario;

  constructor( private perfiservice: PerfilUsuarioService ) { }

  ngOnInit() {
    
    this.perfiservice.get_usuario(localStorage.getItem('user_id')).subscribe((data: any) => {
      this.usuario = data;
    }, (error: any) => {
      this.error = error;
    });
  }
}
