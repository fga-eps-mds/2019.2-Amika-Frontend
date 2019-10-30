import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisComponent } from './materiais.component';

describe('MateriaisComponent', () => {
  let component: MateriaisComponent;
  let fixture: ComponentFixture<MateriaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
