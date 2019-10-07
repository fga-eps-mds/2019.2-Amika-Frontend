import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFelicidadeAutenticaComponent } from './formulario-felicidade-autentica.component';

describe('FormularioFelicidadeAutenticaComponent', () => {
  let component: FormularioFelicidadeAutenticaComponent;
  let fixture: ComponentFixture<FormularioFelicidadeAutenticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFelicidadeAutenticaComponent ]
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
