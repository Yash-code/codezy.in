import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JseventsComponent } from './jsevents.component';

describe('JseventsComponent', () => {
  let component: JseventsComponent;
  let fixture: ComponentFixture<JseventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JseventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
