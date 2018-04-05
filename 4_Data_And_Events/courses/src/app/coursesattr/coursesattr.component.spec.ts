import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesattrComponent } from './coursesattr.component';

describe('CoursesattrComponent', () => {
  let component: CoursesattrComponent;
  let fixture: ComponentFixture<CoursesattrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesattrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
