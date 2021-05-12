import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatinlineblockComponent } from './floatinlineblock.component';

describe('FloatinlineblockComponent', () => {
  let component: FloatinlineblockComponent;
  let fixture: ComponentFixture<FloatinlineblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatinlineblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatinlineblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
