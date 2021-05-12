import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JswheretoComponent } from './jswhereto.component';

describe('JswheretoComponent', () => {
  let component: JswheretoComponent;
  let fixture: ComponentFixture<JswheretoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JswheretoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JswheretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
