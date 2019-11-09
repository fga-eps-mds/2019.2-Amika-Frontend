import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMatriculaComponent } from './lista-de-matricula.component';

describe('ListaDeMatriculaComponent', () => {
  let component: ListaDeMatriculaComponent;
  let fixture: ComponentFixture<ListaDeMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
