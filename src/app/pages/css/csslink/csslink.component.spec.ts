import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsslinkComponent } from './csslink.component';

describe('CsslinkComponent', () => {
  let component: CsslinkComponent;
  let fixture: ComponentFixture<CsslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
