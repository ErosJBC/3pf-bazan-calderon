import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterCourseComponent } from './modal-register-course.component';

describe('ModalRegisterCourseComponent', () => {
  let component: ModalRegisterCourseComponent;
  let fixture: ComponentFixture<ModalRegisterCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegisterCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegisterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
