import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursepipesComponent } from './coursepipes.component';

describe('CoursepipesComponent', () => {
  let component: CoursepipesComponent;
  let fixture: ComponentFixture<CoursepipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursepipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
