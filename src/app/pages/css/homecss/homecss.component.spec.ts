import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecssComponent } from './homecss.component';

describe('HomecssComponent', () => {
  let component: HomecssComponent;
  let fixture: ComponentFixture<HomecssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
