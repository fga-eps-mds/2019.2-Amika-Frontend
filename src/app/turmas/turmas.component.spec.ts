import { LoginComponent } from './../login/login.component';
import { Turma } from './turmas.model';
import { TurmaService } from './turma.service';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { AutenticacaoService } from '../autenticacao.service';
import { TurmasComponent } from './turmas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { MaterialModule } from '../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';

describe('TurmasComponent', () => {
  let component: TurmasComponent;
  let fixture: ComponentFixture<TurmasComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpMock: HttpTestingController;
  let service: TurmaService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TurmasComponent,
        LoginComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'login', component: LoginComponent },
            { path: 'turmas', component: TurmasComponent },
          ]
        ),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ModalModule.forRoot(),
        MaterialModule,
        RouterTestingModule,
      ],
      providers: [
        TurmaService,
        AutenticacaoService,
        BsModalService,
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TurmasComponent);
      component = fixture.componentInstance;
    });
    injector = getTestBed();
    service = injector.get(TurmaService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  const listaTurmasTeste = {
    data: [
      { id: 1, descricao: 'A' },
      { id: 2, descricao: 'B' },
      { id: 3, descricao: 'C' },
    ]
  };

  const turmaE = {
    data:
    { descricao: 'E' }
  };

  const turmaDetails = {
    data: [
      { id: 1, descricao: 'A' },
    ]
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get_turmas() should return data', () => {
    service.get_turmas().subscribe((res:any) => {
      expect(res).toEqual(listaTurmasTeste);
    });
    const req = httpMock.match(environment.urlApi + 'turmas/');
    expect(req[0].request.method).toBe('GET');
    req[0].flush(listaTurmasTeste);
  });


  it('getById() should return turma detail', () => {
    // const req = httpMock.match({method: 'GET', url: environment.urlApi + 'turma/1'});
    service.getById('1').subscribe((data: any) => {
      console.log(data);
      expect(data[0].descricao).toEqual('A');
    });
    const req = httpMock.match(environment.urlApi + 'turma/1');
    console.log(req[0].request.method);
    expect(req[0].request.method).toBe('GET');
    // req[0].flush(turmaDetails);
  });

  it('create_turmas() should POST and return data', () => {
    service.create_turmas(turmaE).subscribe((res) => {
      expect(res).toEqual({ msg: 'success' });
    });
    const req = httpMock.expectOne(environment.urlApi + 'turma/');
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });


  it('should post the correct data', () => {
    service.create_turmas({ descricao: 'F' }).subscribe((data: any) => {
        expect(data.descricao).toBe('F');
      });

    const req = httpMock.expectOne(
      environment.urlApi + `turma/`,
      'post to api'
    );
    expect(req.request.method).toBe('POST');

    req.flush({
      descricao: 'F'
    });

    httpMock.verify();
  });

  it('should put the correct data', () => {
    service.edit_turmas(1, { descricao: 'G' }).subscribe((data: any) => {
        expect(data.descricao).toBe('G');
      });

    const req = httpMock.expectOne(
      environment.urlApi + `turma/1`,
      'put to api'
    );
    expect(req.request.method).toBe('PUT');

    req.flush({
      descricao: 'G'
    });

    httpMock.verify();
  });

  it('should delete the correct data', () => {
    service.delete_turmas(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(
      environment.urlApi + `turma/3`,
      'delete to api'
    );
    expect(req.request.method).toBe('DELETE');

    req.flush(3);

    httpMock.verify();
  });

  it('form should be invalid', async(() => {
    component.formularioTurma.controls['id'].setValue('');
    component.formularioTurma.controls['descricao'].setValue('');
    expect(component.formularioTurma.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.formularioTurma.controls['id'].setValue('4');
    component.formularioTurma.controls['descricao'].setValue('D');
    expect(component.formularioTurma.valid).toBeTruthy();
  }));
});
