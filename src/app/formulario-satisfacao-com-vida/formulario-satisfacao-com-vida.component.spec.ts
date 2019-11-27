import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { FormularioSatisfacaoComVidaComponent } from './formulario-satisfacao-com-vida.component';
import { AppModule } from '../app.module';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';


describe('FormularioSatisfacaoComVidaComponent', () => {
  let component: FormularioSatisfacaoComVidaComponent;
  let fixture: ComponentFixture<FormularioSatisfacaoComVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSatisfacaoComVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
