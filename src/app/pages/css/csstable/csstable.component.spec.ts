import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstableComponent } from './csstable.component';

describe('CsstableComponent', () => {
  let component: CsstableComponent;
  let fixture: ComponentFixture<CsstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
