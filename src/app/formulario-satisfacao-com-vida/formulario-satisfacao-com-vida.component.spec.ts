import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSatisfacaoComVidaComponent } from './formulario-satisfacao-com-vida.component';

describe('FormularioSatisfacaoComVidaComponent', () => {
  let component: FormularioSatisfacaoComVidaComponent;
  let fixture: ComponentFixture<FormularioSatisfacaoComVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSatisfacaoComVidaComponent ]
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
