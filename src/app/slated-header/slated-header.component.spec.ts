import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlatedHeaderComponent } from './slated-header.component';

describe('SlatedHeaderComponent', () => {
  let component: SlatedHeaderComponent;
  let fixture: ComponentFixture<SlatedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlatedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlatedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
