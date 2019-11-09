import { Turma } from './turmas.model';
import { TurmaService } from './turma.service';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { TurmasComponent } from './turmas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

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
      declarations: [ TurmasComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [TurmaService],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(TurmasComponent);
      component = fixture.componentInstance;
    });
    injector = getTestBed();
    service = injector.get(TurmaService);
    httpMock = injector.get(HttpTestingController);
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

  it('get_turmas() should return data', () => {
    service.get_turmas().subscribe((res) => {
      expect(res).toEqual(listaTurmasTeste);
    });

    const req = httpMock.expectOne('http://localhost:8000/turmas/');
    expect(req.request.method).toBe('GET');
    req.flush(listaTurmasTeste);
  });

  it('getById() should return turma detail', () => {
    service.getById('1').subscribe((data: any) => {
      expect(data.descricao).toEqual('A');
    });


    const req = httpMock.expectOne('http://localhost:8000/turma/1');
    expect(req.request.method).toBe('GET');
    req.flush(turmaDetails);
  });

  it('create_turmas() should POST and return data', () => {
    service.create_turmas(turmaE).subscribe((res) => {
      expect(res).toEqual({ msg: 'success' });
    });

    const req = httpMock.expectOne('http://localhost:8000/turma/');
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });


  it('should post the correct data', () => {
    service.create_turmas({ descricao: 'F' }).subscribe((data: any) => {
        expect(data.descricao).toBe('F');
      });

    const req = httpMock.expectOne(
      `http://localhost:8000/turma/`,
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
        expect(data.descricao).toBe('g');
      });

    const req = httpMock.expectOne(
      `http://localhost:8000/turma/1`,
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
      `http://localhost:8000/turma/3`,
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
