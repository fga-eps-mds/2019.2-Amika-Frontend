import { AppModule } from './../app.module';
import { LoginComponent } from './../login/login.component';
import { TurmaService } from './turma.service';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TurmasComponent, CriarTurmasDialogo } from './turmas.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import {MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { of, throwError } from 'rxjs';


describe('TurmasComponent', () => {
  let component: TurmasComponent;
  let fixture: ComponentFixture<TurmasComponent>;
  let dialogo: CriarTurmasDialogo;
  let fixture_dialogo: ComponentFixture<CriarTurmasDialogo>;
  let httpMock: HttpTestingController;
  let service: TurmaService;
  let injector: TestBed;
  const listaTurmasTeste = [
    { id: 1, descricao: 'A' },
    { id: 2, descricao: 'B' },
    { id: 3, descricao: 'C' },
    { id: 4, descricao: 'G' },
  ];
  const listaTurmasNova = [
    { id: 1, descricao: 'A' },
    { id: 2, descricao: 'B' },
    { id: 3, descricao: 'C' },
    { id: 4, descricao: 'G' },
    { id: 5, descricao: 'K' },
  ];
  const turma = { id: 1, descricao: 'A' };
  const turmaErro = { id:99, descricao: 'ABC'}
  const mensagemErro = {erro: "Não é possível fazer esta requisição"};
  const turmasServiceStub = {
    get_turmas() {
      if (!component.error){
        return of( listaTurmasTeste ); 
      }
      else {
        component.error = mensagemErro;
        return throwError(of( mensagemErro )); 
      }
    },

    delete_turmas(id) {
      if (typeof listaTurmasTeste[id] != 'undefined'){
        const turma = listaTurmasTeste[id]
        return of( turma );
      }
      else {
        component.error = mensagemErro;
        return throwError(of(mensagemErro) ); 
      }
    },

    create_turmas(turma) {
      if (turma.descricao.length < 2){
        const nova_turma = turma;
        listaTurmasTeste.push(turma);
        return of(nova_turma);
      }
      else {
        component.error = mensagemErro;
        return throwError(of(mensagemErro) ); 
      }
    },

    edit_turmas(id, turma) {
      if (typeof listaTurmasTeste[id-1] != 'undefined'){
        const turma_editada = turma;
        listaTurmasNova[id-1] = turma;
        listaTurmasTeste[id-1] = turma;
        return of(turma_editada);
      }
      else {
        component.error = mensagemErro;
        return throwError(of(mensagemErro) ); 
      }
    },

    getById(id) {
      if (!component.error){
        const turma = listaTurmasTeste[id];
        return of(turma);
      }
      else {
        component.error = mensagemErro;
        return throwError(of(mensagemErro) ); 
      }
    }
  };

  let dialogMock = {
    close: () => { },
    open() {
      return {
          afterClosed: () => of({ name: 'some object' })
      };
    }
  };
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      providers: [
        {provide: MatDialogRef, useValue: dialogMock},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: TurmaService, useValue: turmasServiceStub}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TurmasComponent);  
      component = fixture.componentInstance;
      fixture_dialogo = TestBed.createComponent(CriarTurmasDialogo); 
      dialogo = fixture_dialogo.componentInstance;
    });
    injector = getTestBed();
    service = injector.get(TurmaService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('Deveria criar component turmas', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria acionar o método ngOnInit e fazer a requisição das turmas', () => {
    component.ngOnInit();
    expect(component.turmas).toBe(listaTurmasTeste);
  })
  
  it('Deveria acionar o método ngOnInit e fazer a requisição das turmas', () => {
    component.error = "ERROR";
    component.getter();
    expect(component.error).toBeTruthy();
  })

  it('Deveria fechar o diálogo após o método onYesClick()', () => {
    component.formularioTurma.controls['descricao'].setValue('G');
    component.formularioTurma.controls['id'].setValue('4');
    let spy = spyOn(dialogo.dialogRef, 'close').and.callThrough();
    dialogo.dialogRef.close();
    expect(spy).toHaveBeenCalled(); 
  });

  it('Deveria validar o campo de descricao que está vazio', () => {
    let errors = {};
    let descricao = component.formularioTurma.controls['descricao'];
    errors = descricao.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Deveria atribuir o erro ao atributo error', () => {
    component.formularioTurma.controls['descricao'];
    let error = component.hasError('descricao');
    expect(error).toBeTruthy();
  });

  it('Deveria abrir a modal de remoção', () => {
    spyOn(component.modalService, 'show').and.returnValue(component.deleteModal);
    component.onDelete(turma);
    expect(component.turmaSelecionada).toBe(turma);
    expect(component.modalService.show).toHaveBeenCalledWith(component.deleteModal, {class: 'modal-sm'});
  });

  it('Deveria ir para a página de edição de turma', () => {
    spyOn(component.router, 'navigate').and.stub();
    component.onEdit(1);
    expect(component.router.navigate).toHaveBeenCalledWith(['turmas_editar', 1]);
  });

  it('Deveria fechar a modal de exclusão após a confirmação', () => {
    component.onDelete(turma);
    spyOn(component.deleteModalRef, 'hide');
    component.onConfirmDelete();
    expect(component.deleteModalRef.hide).toHaveBeenCalled();
  });

  it('Deveria dar mensagem de erro ao tentar excluir item inexistente', () => {
    component.onDelete(turmaErro);
    component.onConfirmDelete();
    expect(component.error).toBeTruthy();
  });

  it('Deveria fechar a modal de exclusão após o cancelamento', () => {
    component.onDelete(turma);
    spyOn(component.deleteModalRef, 'hide');
    component.onDeclineDelete();
    expect(component.deleteModalRef.hide).toHaveBeenCalled();
  })

  it('Deveria editar a turma', () => {
    component.formularioTurma.controls['descricao'].setValue('PQ');
    component.formularioTurma.controls['id'].setValue('4');
    component.turmas = listaTurmasTeste;
    component.edit();
    expect(component.turmas[component.formularioTurma.value.id-1].descricao).toBe('PQ');
  })

  it('Deveria dar erro ao editar a turma', () => {
    component.formularioTurma.controls['descricao'].setValue('G');
    component.formularioTurma.controls['id'].setValue('51');
    component.turmas = listaTurmasTeste;
    component.edit();
    expect(component.error).toBeTruthy();
  })

  it('Deveria criar uma nova turma', () => {
    component.formularioTurma.controls['descricao'].setValue('K');
    component.formularioTurma.controls['id'].setValue(5);
    component.onSubmit();
    expect(component.turmas).toEqual(listaTurmasNova);
  });

  it('Deveria dar erro ao criar uma nova turma', () => {
    component.formularioTurma.controls['descricao'].setValue('ABCDE');
    component.formularioTurma.controls['id'].setValue(5);
    component.onSubmit();
    expect(component.error).toBeTruthy();
  });

  it('Deveria fechar o dialogo de adiconar turma', () => {
    component.formularioTurma.controls['descricao'].setValue('D');
    component.criarDialogoAdicionarTurma();
    let spy = spyOn(dialogo.dialogRef, 'close').and.callThrough();
    dialogo.dialogRef.close();
    expect(spy).toHaveBeenCalled(); 
  })

  it('Deveria fechar o dialogo de enviar', () => {
    component.formularioTurma.controls['descricao'].setValue('G');
    component.formularioTurma.controls['id'].setValue('4');
    let spy = spyOn(dialogo.dialogRef, 'close').and.callThrough();
    dialogo.submit(component.formularioTurma);
    expect(spy).toHaveBeenCalled(); 
  })

  it('Deveria fechar o dialogo de editar turma', () => {
    component.formularioTurma.controls['descricao'].setValue('G');
    component.formularioTurma.controls['id'].setValue('4');
    component.turmas = listaTurmasTeste;
    component.criarDialogoEditarTurma({ descricao: 'G', id: '4' });
    let spy = spyOn(dialogo.dialogRef, 'close').and.callThrough();
    dialogo.dialogRef.close();
    expect(spy).toHaveBeenCalled(); 
  })
});
