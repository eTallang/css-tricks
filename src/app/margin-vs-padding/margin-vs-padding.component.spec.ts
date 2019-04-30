import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginVsPaddingComponent } from './margin-vs-padding.component';

describe('MarginVsPaddingComponent', () => {
  let component: MarginVsPaddingComponent;
  let fixture: ComponentFixture<MarginVsPaddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginVsPaddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginVsPaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
