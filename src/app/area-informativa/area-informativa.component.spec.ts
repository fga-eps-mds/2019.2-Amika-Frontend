import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInformativaComponent } from './area-informativa.component';

describe('AreaInformativaComponent', () => {
  let component: AreaInformativaComponent;
  let fixture: ComponentFixture<AreaInformativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaInformativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
