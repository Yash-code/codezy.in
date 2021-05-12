import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsvariablesComponent } from './jsvariables.component';

describe('JsvariablesComponent', () => {
  let component: JsvariablesComponent;
  let fixture: ComponentFixture<JsvariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsvariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
