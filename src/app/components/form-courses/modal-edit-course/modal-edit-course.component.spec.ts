import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCourseComponent } from './modal-edit-course.component';

describe('ModalEditCourseComponent', () => {
  let component: ModalEditCourseComponent;
  let fixture: ComponentFixture<ModalEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
