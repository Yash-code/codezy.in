import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbooleanComponent } from './jsboolean.component';

describe('JsbooleanComponent', () => {
  let component: JsbooleanComponent;
  let fixture: ComponentFixture<JsbooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsbooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsbooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
