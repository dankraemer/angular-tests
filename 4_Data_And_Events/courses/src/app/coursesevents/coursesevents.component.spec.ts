import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseseventsComponent } from './coursesevents.component';

describe('CourseseventsComponent', () => {
  let component: CourseseventsComponent;
  let fixture: ComponentFixture<CourseseventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseseventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
