import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsarraysComponent } from './jsarrays.component';

describe('JsarraysComponent', () => {
  let component: JsarraysComponent;
  let fixture: ComponentFixture<JsarraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsarraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsarraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
