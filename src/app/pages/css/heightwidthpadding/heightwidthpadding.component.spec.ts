import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightwidthpaddingComponent } from './heightwidthpadding.component';

describe('HeightwidthpaddingComponent', () => {
  let component: HeightwidthpaddingComponent;
  let fixture: ComponentFixture<HeightwidthpaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightwidthpaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightwidthpaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
