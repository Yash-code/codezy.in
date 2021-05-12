import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsintroComponent } from './jsintro.component';

describe('JsintroComponent', () => {
  let component: JsintroComponent;
  let fixture: ComponentFixture<JsintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
