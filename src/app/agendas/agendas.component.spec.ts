import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasComponent } from './agendas.component';

describe('AgendasComponent', () => {
  let component: AgendasComponent;
  let fixture: ComponentFixture<AgendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
