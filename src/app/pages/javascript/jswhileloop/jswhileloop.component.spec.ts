import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JswhileloopComponent } from './jswhileloop.component';

describe('JswhileloopComponent', () => {
  let component: JswhileloopComponent;
  let fixture: ComponentFixture<JswhileloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JswhileloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JswhileloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
