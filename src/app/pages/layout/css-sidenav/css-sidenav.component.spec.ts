import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSidenavComponent } from './css-sidenav.component';

describe('CssSidenavComponent', () => {
  let component: CssSidenavComponent;
  let fixture: ComponentFixture<CssSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
