import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSidenavComponent } from './js-sidenav.component';

describe('JsSidenavComponent', () => {
  let component: JsSidenavComponent;
  let fixture: ComponentFixture<JsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
