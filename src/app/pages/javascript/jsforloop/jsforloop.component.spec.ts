import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsforloopComponent } from './jsforloop.component';

describe('JsforloopComponent', () => {
  let component: JsforloopComponent;
  let fixture: ComponentFixture<JsforloopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsforloopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsforloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
