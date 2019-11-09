import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAutoRegistroComponent } from './aluno-auto-registro.component';

describe('AlunoAutoRegistroComponent', () => {
  let component: AlunoAutoRegistroComponent;
  let fixture: ComponentFixture<AlunoAutoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAutoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAutoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
