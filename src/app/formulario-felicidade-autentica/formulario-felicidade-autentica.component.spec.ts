import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { FormularioFelicidadeAutenticaComponent } from './formulario-felicidade-autentica.component';
import { AppModule } from '../app.module';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';

describe('FormularioFelicidadeAutenticaComponent', () => {
  let component: FormularioFelicidadeAutenticaComponent;
  let fixture: ComponentFixture<FormularioFelicidadeAutenticaComponent>;

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
    fixture = TestBed.createComponent(FormularioFelicidadeAutenticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
