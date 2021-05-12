import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsobjectsComponent } from './jsobjects.component';

describe('JsobjectsComponent', () => {
  let component: JsobjectsComponent;
  let fixture: ComponentFixture<JsobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
