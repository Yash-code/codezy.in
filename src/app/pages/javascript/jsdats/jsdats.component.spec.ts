import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsdatsComponent } from './jsdats.component';

describe('JsdatsComponent', () => {
  let component: JsdatsComponent;
  let fixture: ComponentFixture<JsdatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsdatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsdatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
