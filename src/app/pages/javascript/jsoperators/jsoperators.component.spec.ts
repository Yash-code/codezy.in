import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoperatorsComponent } from './jsoperators.component';

describe('JsoperatorsComponent', () => {
  let component: JsoperatorsComponent;
  let fixture: ComponentFixture<JsoperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsoperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
