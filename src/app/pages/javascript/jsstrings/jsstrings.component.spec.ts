import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsstringsComponent } from './jsstrings.component';

describe('JsstringsComponent', () => {
  let component: JsstringsComponent;
  let fixture: ComponentFixture<JsstringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsstringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsstringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
