import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsstatementComponent } from './jsstatement.component';

describe('JsstatementComponent', () => {
  let component: JsstatementComponent;
  let fixture: ComponentFixture<JsstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
