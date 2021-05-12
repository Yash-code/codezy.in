import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbreakpointComponent } from './jsbreakpoint.component';

describe('JsbreakpointComponent', () => {
  let component: JsbreakpointComponent;
  let fixture: ComponentFixture<JsbreakpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsbreakpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsbreakpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
