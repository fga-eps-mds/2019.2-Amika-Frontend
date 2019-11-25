import { GrupoEditComponent } from './grupo-edit.component';
import { AppModule } from '../../app.module';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';

describe('GrupoEditComponent', () => {
  let component: GrupoEditComponent;
  let fixture: ComponentFixture<GrupoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
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
