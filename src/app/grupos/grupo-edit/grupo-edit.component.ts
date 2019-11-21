import { FormularioService } from './../../formulario.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GrupoService } from '../grupo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Grupo } from '../grupos.model';
import { GruposComponent } from '../grupos.component';

@Component({
  selector: 'app-grupo-edit',
  templateUrl: './grupo-edit.component.html',
  styleUrls: ['./grupo-edit.component.css']
})
export class GrupoEditComponent implements OnInit {
  grupos: Grupo;
  error: any;
  formularioGrupo: FormGroup;
  submitted = false;
  grupoComponent: GruposComponent;

  constructor(private grupoService: GrupoService, private formularioService: FormularioService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const grupo$ = this.grupoService.getById(id)
        grupo$.subscribe(grupo => {
          this.updateForm(grupo);
        });
      }
      );
      this.formularioGrupo = this.formularioService.createFormGrupo();
   }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['grupos']);
  }

  updateForm(grupo) {
    this.formularioGrupo.patchValue({
      id: grupo.id,
      nome: grupo.nome,
    });
  }

  onSave() {
    this.submitted = true;
    this.route.params.subscribe(
      (params: any) => {
        if (this.formularioGrupo.valid) {
          console.log('Editado');
          console.log(this.formularioGrupo);
          this.grupoService.edit_grupos(params['id'], this.formularioGrupo.value).subscribe((data: any) => {
            console.log(data);
            this.formularioGrupo.reset();
            this.return();

          }, (error: any) => {
            this.error = error;
          });
        }
      }
    );
  }

  getter() {
    this.grupoService.get_grupos().subscribe((data: any) => {
      console.log(data);

      this.grupos = data;
    }, (error: any) => {
      this.error = error;
      this.router.navigate(['']);
    });
  }

  hasError(field: string) {
    return this.formularioGrupo.get(field).errors;
  }

}
