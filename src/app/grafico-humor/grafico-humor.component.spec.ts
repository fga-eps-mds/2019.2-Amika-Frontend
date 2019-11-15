import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoHumorComponent } from './grafico-humor.component';

describe('GraficoHumorComponent', () => {
  let component: GraficoHumorComponent;
  let fixture: ComponentFixture<GraficoHumorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoHumorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoHumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
