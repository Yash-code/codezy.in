import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssexerciseComponent } from './cssexercise.component';

describe('CssexerciseComponent', () => {
  let component: CssexerciseComponent;
  let fixture: ComponentFixture<CssexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
