import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEditComponent } from './grupo-edit.component';

describe('GrupoEditComponent', () => {
  let component: GrupoEditComponent;
  let fixture: ComponentFixture<GrupoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
