import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssintroductionComponent } from './cssintroduction.component';

describe('CssintroductionComponent', () => {
  let component: CssintroductionComponent;
  let fixture: ComponentFixture<CssintroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssintroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
