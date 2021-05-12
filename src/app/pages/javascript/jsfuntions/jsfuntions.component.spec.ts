import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfuntionsComponent } from './jsfuntions.component';

describe('JsfuntionsComponent', () => {
  let component: JsfuntionsComponent;
  let fixture: ComponentFixture<JsfuntionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsfuntionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfuntionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
