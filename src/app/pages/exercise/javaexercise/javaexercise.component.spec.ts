import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaexerciseComponent } from './javaexercise.component';

describe('JavaexerciseComponent', () => {
  let component: JavaexerciseComponent;
  let fixture: ComponentFixture<JavaexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
