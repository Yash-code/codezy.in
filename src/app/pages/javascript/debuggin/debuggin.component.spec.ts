import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugginComponent } from './debuggin.component';

describe('DebugginComponent', () => {
  let component: DebugginComponent;
  let fixture: ComponentFixture<DebugginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
